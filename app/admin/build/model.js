const buildRes = require("./repository");

exports.delete = async function (query) {
    await buildRes.delete(query.list)
    return {
        status: true,
        msg: "success",
        code: 0,
        data: []
    };
}


exports.add = async function (query) {
    await buildRes.insert_build(query.list)
    return {
        status: true,
        msg: "success",
        code: 0,
        data: []
    };
}

exports.update = async function (query) {
    await buildRes.update(query.id, query.data)
    return {

        status: true,
        msg: "success",
        code: 0,
        data: []
    };
}