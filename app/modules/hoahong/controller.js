let model = require('./model')
exports.list = async () => {

    let validate = await val.Form(query, {
        search: "required",
      });
      if (!validate.status) {
        return { status: false, msg: validate.error, code: 707, data: [] };
      }
    
      return await model.list(query)

}
