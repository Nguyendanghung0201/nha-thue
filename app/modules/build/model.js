const buildRes = require("./repository");


exports.list = async function (query) {

    let result = await buildRes.get_list(query);
    // let list = await buildRes.getMybuild(query.userInfo.Id);
    // let list2 = list.map(e => e.buiding_id)
    // let result2 = result.data.map(e => {
    //     if (list2.includes(e.id)) {
    //         e.mybuild = true;
    //     } else {
    //         e.mybuild = false;
    //     }
    //     return e
    // })
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result
    };
}
function removeDuplicates(inputString) {
    const charSet = new Set();
    let result = '';

    for (const char of inputString) {
        if (!charSet.has(char)) {
            charSet.add(char);
            result += char;
        }
    }

    return result;
}


exports.list_building2 = async function (query) {
    let search = query.search.replaceAll(" ", "")
    //'.*a.*b.*c.*'

    let output = removeDuplicates(search);
    if (output.length > 10) {
        output = output.replace('a', '').replace('i', '')
    }
    if (output.length > 15) {
        output = output.slice(0, 15)
    }
    let result = await buildRes.list_building2(output, query.page, query.type);
   
    let list = await buildRes.getMybuild(query.userInfo.Id);
    console.log(list)
    let list2 = list.map(e => e.buiding_id)
    result.data = result.data.map(e => {
        if (list2.includes(e.detail_id)) {
            e.mybuild = true;
        } else {
            e.mybuild = false;
        }
        return e
    })
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result
    };
}

exports.list_nha_gan = async function (query) {
    let result = await buildRes.get_list_gan(query.city)
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result
    };
}
exports.list_ga = async function (query) {
    let list_id = query.param.id;
    let list_id_arr = list_id.split("or")

    let result = await buildRes.get_list_ga(query.page, list_id_arr);
    let list = await buildRes.getMybuild(query.userInfo.Id);
    let list2 = list.map(e => e.buiding_id)
    let result2 = result.data.map(e => {
        if (list2.includes(e.id)) {
            e.mybuild = true;
        } else {
            e.mybuild = false;
        }
        return e
    })
    return {
        status: true,
        msg: "success",
        code: 0,
        data: {
            data: result2,
            pagination: result.pagination
        }
    };
}
exports.detail = async function (query) {
    let result = await buildRes.detail(query.param.id);
    // let check = await buildRes.check(query.userInfo.Id, query.param.id);
    // if (result) {
    //     if (check) {
    //         result.mybuild = true
    //     } else {
    //         result.mybuild = false
    //     }
    // }
    // let city = result.city_id;
    // let list_nha_gan = []
    // if (city) {
    //     list_nha_gan = await buildRes.get_list_gan(city)
    // }
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result,
        // list_nha_gan: list_nha_gan
    };
}
exports.check_detail = async function (query) {
    // let result = await buildRes.detail(query.param.id);
    let check = await buildRes.check(query.userInfo.Id, query.param.id);
    // if (result) {
    //     if (check) {
    //         result.mybuild = true
    //     } else {
    //         result.mybuild = false
    //     }
    // }
    // let city = result.city_id;
    // let list_nha_gan = []
    // if (city) {
    //     list_nha_gan = await buildRes.get_list_gan(city)
    // }

    return {
        status: true,
        msg: "success",
        code: 0,
        data: check,
        // list_nha_gan: list_nha_gan
    };
}

exports.list_map = async function (query) {
    let result
    // if(query.zoom >11){
    result = await buildRes.list_map(query.lat, query.lng, query.lat2, query.lng2);
    // }else{
    //      result = await buildRes.list_map_random(query.lat,query.lng,query.lat2,query.lng2);
    // }

    // let check = await buildRes.check(query.userInfo.Id, query.param.id);
    // if (result) {
    //     if (check) {
    //         result.mybuild = true
    //     } else {
    //         result.mybuild = false
    //     }
    // }
    // let city = result.city_id;
    // let list_nha_gan = []
    // if (city) {
    //     list_nha_gan = await buildRes.get_list_gan(city)
    // }
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result,
        // list_nha_gan: list_nha_gan
    };
}
