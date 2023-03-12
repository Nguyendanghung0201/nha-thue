const db = require("../../cors/db");

class history_repository {
    constructor() {
        this.db = "history_login";
        this.column = {
            Id: "Id",
            username: "username",
            status: "status",
            request_at: "request_at",
            ip_request: "ip_request",
            device: "device",
            code: "code"
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

    async insert(dataInsert) {
        return await db(this.db).insert(dataInsert);
    }
}

module.exports = new history_repository();
