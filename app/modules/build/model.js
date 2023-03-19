const buildRes = require("./repository");


exports.list = async function (query) {
console.log('âjajja')
    let result = await buildRes.get_list(query)
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result
    };
}
