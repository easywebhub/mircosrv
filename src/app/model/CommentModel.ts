import  ICommentModel = require( "./interfaces/ICommentModel");

class CommentModel {
   
   private _comment: ICommentModel;
   
   constructor(comment: ICommentModel) {
       this._comment = comment;
   }
   get name (): string {
       return this._comment.id;
   }
   
   get body (): string {
       return this._comment.body;
   }
   
   get creatAt (): Date {
       return this._comment.creatAt;
   }
   
    
}
Object.seal(CommentModel);
export =  CommentModel;