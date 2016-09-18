import CommentRepository = require('../../app/repository/CommentRepository');
import ICommentBusiness = require("./interfaces/ICommentBusiness");
import ICommentModel = require("./../model/interfaces/ICommentModel");
import CommentModel = require("./../model/CommentModel");


class CommentBusiness  implements ICommentBusiness {
    private _CommentRepository: CommentRepository;
    
    constructor () {
        this._CommentRepository = new CommentRepository();
    }  
        
    create (item: ICommentModel, callback: (error: any, result: any) => void) {
        this._CommentRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._CommentRepository.retrieve(callback);
    }
    
    update (_id: string, item: ICommentModel, callback: (error: any, result: any) => void) {
        
        this._CommentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            
            else 
                this._CommentRepository.update(res._id, item, callback);
               
        });    
    }
    
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._CommentRepository.delete(_id , callback);
    }
    
    findById (_id: string, callback: (error: any, result: ICommentModel) => void) {
        this._CommentRepository.findById(_id, callback);
    }
    
}


Object.seal(CommentBusiness);
export = CommentBusiness;