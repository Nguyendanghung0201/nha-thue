const repLocation = require('./repository')
exports.list_province = async () => {
    return await repLocation.getListProvice()
}

exports.list_city = async(query)=>{
    return await repLocation.getListCity(query.param.id)
}

exports.list_town = async(query)=>{
    return await repLocation.getListTown(query.param.id)
}
