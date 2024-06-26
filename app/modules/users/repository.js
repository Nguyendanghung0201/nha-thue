const db = require("../../cors/db");

class user_repository {
    constructor() {
        this.db = "users";
        this.column = {
            Id: "Id",
            display_name: "display_name",
            email: "email",
            ref:'ref',
            country: "country",
            address: "address",
            gender: "gender",
            status: "status",
            level: "level",
            created_at: "created_at",
            updated_at: "updated_at",
            birthday:"birthday",
            phone: "phone",
            avatar: "avatar",
            find_raw: "find_raw"
        };
    }

    _create_select_ignore(ignore = []) {
        let select = [];
        for (let item in this.column) {
            if (ignore.indexOf(this.column[item]) === -1) {
                select.push(this.column[item]);
            }
        }
        return select;
    }

    _create_select_care(care = []) {
        let select = [];
        for (let item in this.column) {
            
            if (care.indexOf(this.column[item]) !== -1) {
                select.push(this.column[item]);
            }
        }
        return select;
    }
    async getlist(ref) {
        return await db(this.db).select('id', 'display_name','phone', 'email','gender', 'created_at',"birthday").where('your_ref', ref)
       
    }
    async getlist_hh(email){
        return await db('hoahong').select("*").where('user_nhanhh_id',email)
    }

 

    async check_email(email) {
        return await db(this.db).where(this.column.email, email).first();
    }
    async check_phone(phone) {
        return await db(this.db).where(this.column.phone, phone).first();
    }
    async my_profile(uid) {
        let select = this._create_select_ignore([]);
        return await db(this.db).select(select).where(this.column.Id, uid).first();
    }
    async update_user(dataUpdate, uid) {
        return await db(this.db).where(this.column.Id, uid).update(dataUpdate);
    }
    async insert_user(dataInsert) {
        return await db(this.db).insert(dataInsert);
    }
    async delete(uid) {
        return await db(this.db).where(this.column.Id, uid).del()
    }

}

module.exports = user_repository;
