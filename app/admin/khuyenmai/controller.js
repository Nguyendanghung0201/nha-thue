const model = require('./model')
// theem dong khuyen mai
exports.add = async () => {
    let validate = await val.Form(query, {
        content: "required",
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }

    return model.add(query)
}
exports.delete = async () => {
    let validate = await val.Form(query, {
        id: "required",
    });
    if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
    }

    return model.delete(query)
}