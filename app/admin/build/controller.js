const model = require('./model');
exports.addbuild = async function (query) {
    let validate = await val.Form(query, {
        name: "required",
        address: "required",
        line: "required",
        infor: "required",
        images: "required",
        phone:"required"

    });
    if (!validate.status) {
        return {status: false, msg: validate.error, code: 707, data: []};
    }
    return await model.addbuild(query);
};

exports.list = async function (query) {
    let validate = await val.Form(query.param, {
       page:'required',
       pagination:'required'

    });
    if (!validate.status) {
        return {status: false, msg: validate.error, code: 707, data: []};
    }
    return await model.list(query);
};

exports.delete = async function (query){
    let validate = await val.Form(query.param, {
        id:'required'
     });

     if (!validate.status) {
        return {status: false, msg: validate.error, code: 707, data: []};
    }
    return await model.delete(query);
}