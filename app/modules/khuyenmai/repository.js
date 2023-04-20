const db = require("../../cors/db");

class khuyenmai_repository {
    constructor() {
        this.db = "khuyen_mai";
        this.column = {
            id: "id",
            name: "name",
            address: "address",
            line: "line",
            infor: "infor",
            images: "images",
            pdf: "pdf",
            created_at: "created_at",
            updated_at: "updated_at",
            phone: "phone",

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
    async insert_build(dataInsert) {
        return await db(this.db).insert(dataInsert);
    }

    async get_list() {
        return await db('khuyen_mai').innerJoin('building2', 'khuyen_mai.buiding_id', 'building2.id')
            .select('building2.*', 'khuyen_mai.id as khuyen_mai_id','khuyen_mai.content')
            .orderByRaw('RAND()').limit(15)
    }


    async delete(uid) {
        return await db(this.db).update('status', 0).where(this.column.id, uid)
    }




}

module.exports = new khuyenmai_repository();
