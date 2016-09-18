import DataAccess = require("./../../dataAccess/DataAccess");
import IComment = require("./../../model/interfaces/ICommentModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CommentSchema {
   
  static get schema () {
       var schema =  mongoose.Schema({
           id : {
               type: String,
               required: true
           },
           body: {
               type: String,
               required: true
           },
           createAt: {
               type: Date,
               required: true
           }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model<IComment>("Comment", CommentSchema.schema);
export = schema;