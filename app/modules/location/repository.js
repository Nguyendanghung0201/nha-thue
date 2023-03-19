const db = require("../../cors/db");

class location_repository {
    constructor() {

    }


    async getListProvice() {
        return await db('province_code').select('*')
    }
    async getListCity(id) {
        return await db('city_code').select('*').where('province_code', id)
    }
    

    async getListTown(id) {
        return await db('town_code').select('*').where('city_code', id)
    }




}

module.exports = new location_repository();
