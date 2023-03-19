const buildRes = require("./repository");

exports.addbuild = async function (query) {

    let dataInsert = {
        name: query.name,
        address: query.address,
        line: query.line,
        infor: query.infor,
        images: query.images,
        phone: query.phone,
        pdf: 'new'
    };
    //create code user

    // return dataInsert;
    result = await buildRes.insert_build(dataInsert);
    return {
        status: true,
        msg: "success",
        code: 0,
        data: {}
    };
};

exports.list = async function (query) {
    let result = await buildRes.get_list(query.param.page, query.param.pagination)
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result
    };
}
exports.delete = async function (query) {
    await buildRes.delete(query.param.id)
    return {
        status: true,
        msg: "success",
        code: 0,
        data: []
    };
}