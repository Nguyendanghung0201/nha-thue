let model = require('./model')
exports.list_province = async () => {

    return await model.list_province()

}


exports.list_city = async (query)=>{
  if(!query.param.id){
    return {status: false, msg: validate.error, code: 707, data: []};
  }

  return await model.list_city(query)
}

exports.list_town = async (query)=>{
    if(!query.param.id){
        return {status: false, msg: validate.error, code: 707, data: []};
      }
    
      return await model.list_town(query)
}