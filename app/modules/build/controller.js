const model = require('./model');

exports.list = async function (query) {
    let validate = await val.Form(query, {
        page: 'required',
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }
    return await model.list(query);
};
exports.list_building2 = async function (query) {
    let validate = await val.Form(query, {
        page: 'required',
        type:'required',
        search:'required',
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }
  
    return await model.list_building2(query);
};

exports.list_nha_gan = async function (query) {
    let validate = await val.Form(query, {
        city: 'required',
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }
    return await model.list_nha_gan(query);
};

exports.list_ga = async function(query){
   
    let validate = await val.Form(query.param, {
        page: 'required',
        ga:'required',
        id:'required'
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }
    return await model.list_ga(query);
}
exports.detail = async function (query) {
    let validate = await val.Form(query.param, {
        id: 'required',
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }
    return await model.detail(query);
};
exports.check_detail = async function (query) {
    let validate = await val.Form(query.param, {
        id: 'required',
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }
    return await model.check_detail(query);
};
exports.list_map = async function (query) {
    let validate = await val.Form(query, {
        lat: 'required',
        lng:'required',
        lat2: 'required',
        lng2:'required',
        zoom:'required',
   
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }
    return await model.list_map(query);
}


