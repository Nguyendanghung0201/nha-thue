const rep = require('./repository')
exports.list = async function(query){
    let result = await rep.get_list(query.search)
    return {
        status:true,
        code:0,
        msg:'success',
        data:result
    }
}