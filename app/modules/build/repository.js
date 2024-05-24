const db = require("../../cors/db");

class build_repository {
    constructor() {
        this.db = "building2";
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

        if (query.city_code) {
            return await db(this.db).select('*').where('status', 1).andWhere('city_id', query.city_code).paginate({ perPage: 20, isLengthAware: true, currentPage: query.page })
        }

        if (query.along_code) {
            return await db(this.db).select('*').where('status', 1).andWhere('along_id', query.along_code).paginate({ perPage: 20, isLengthAware: true, currentPage: query.page })
        }
        return await db(this.db).select('*').where('status', 1).paginate({ perPage: 20, isLengthAware: true, currentPage: query.page })

    }

    async list_building2(tukhoa, page, type) {
        if (type == 'station') {
            return await db(this.db).select('*')
                .where(function () {
                    for (const keyword of tukhoa) {
                        this.andWhere(db.raw('LOWER(search_key)'), 'like', `%${keyword}%`);
                    }
                })
                .paginate({ perPage: 20, isLengthAware: true, currentPage: page ?? 1 })
        }

        return await db(this.db).select('*')
            .where(function () {
                for (const keyword of tukhoa) {
                    this.andWhere(db.raw('LOWER(search_key)'), 'like', `%${keyword}%`);
                }
            })
            .paginate({ perPage: 20, isLengthAware: true, currentPage: page ?? 1 })

    }

    async list_building3(tukhoa, page, type) {
        // if(type=='station'){
        //     return await db(this.db).select('*')
        //     .where(function () {
        //         for (const keyword of tukhoa) {
        //             this.andWhere(db.raw('LOWER(search_key)'), 'like', `%${keyword}%`);
        //         }
        //     })
        //     .paginate({ perPage: 20, isLengthAware: true, currentPage: page ?? 1 })
        // }

        return await db(this.db).select('*').where('search_key', 'like', '%' + tukhoa + '%')
            // .where(function () {
            //     for (const keyword of tukhoa) {
            //         this.andWhere(db.raw('LOWER(search_key)'), 'like', `%${keyword}%`);
            //     }
            // })
            .paginate({ perPage: 20, isLengthAware: true, currentPage: page ?? 1 })

    }
    async get_list_gan(city) {
        return await db(this.db).select('*').where('status', 1).andWhere('city_id', city)
            .orderByRaw('RAND()').limit(15)
    }

    async getMybuild(user_id) {
        return await db('my_build').innerJoin('building2', 'my_build.buiding_id', 'building2.detail_id').select('buiding_id').where('my_build.user_id', user_id)

    }

    async delete(uid) {
        return await db(this.db).update('status', 0).where(this.column.id, uid)
    }

    async detail(uid) {
        return await db(this.db).select('*').where('detail_id', uid).first()
    }
    async check(uid, buiding_id) {
        return await db('my_build').select('*').where('user_id', uid).andWhere('buiding_id', buiding_id).first()
    }
    async get_list_ga(page, id_ga) {
        return await db('nha_ga_build').innerJoin('building2', 'building2.id', 'nha_ga_build.build_id').select('building2.*', 'nha_ga_build.nha_ga_id')
            .orWhereIn('nha_ga_build.nha_ga_id', id_ga).paginate({ perPage: 20, isLengthAware: true, currentPage: page })
    }

    async list_map_random(lat, lng, lat2, lng2) {
        return await db(this.db).select('*').where('status', 1)
            .andWhere('lat_map', '>', lat)
            .andWhere('lat_map', '<', lat2)
            .andWhere('long_map', '>', lng)
            .andWhere('long_map', '<', lng2)
        //    .limit(15) 
    }
    async list_map(lat, lng, lat2, lng2) {
        return await db(this.db).select('*').where('status', 1)
            .andWhere('lat_map', '>', lat)
            .andWhere('lat_map', '<', lat2)
            .andWhere('long_map', '>', lng)
            .andWhere('long_map', '<', lng2)
    }


}

module.exports = new build_repository();
