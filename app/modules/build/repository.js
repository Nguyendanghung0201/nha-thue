const db = require("../../cors/db");

class build_repository {
    constructor() {
        this.db = "building";
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

    async get_list(query) {
        if (query.province_code) {
            return await db(this.db).select('*').where('status', 1).andWhere('province_id', query.province_code).limit(20).offset((query.page - 1) * 20)
        }
        if (query.city_code) {
            return await db(this.db).select('*').where('status', 1).andWhere('city_id', query.city_code).limit(20).offset((query.page - 1) * 20)
        }

    }

    async delete(uid) {
        return await db(this.db).update('status', 0).where(this.column.id, uid)
    }

}

module.exports = new build_repository();
