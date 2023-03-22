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

