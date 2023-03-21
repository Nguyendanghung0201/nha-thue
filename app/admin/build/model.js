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