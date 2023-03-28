const buildRes = require("./repository");


exports.list = async function (query) {

    let result = await buildRes.get_list(query);
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
    return {
        status: true,
        msg: "success",
        code: 0,
        data: result
    };
}