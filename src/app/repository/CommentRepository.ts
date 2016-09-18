import CommentModel = require ('./../model/CommentModel');
import ICommentModel = require("./../model/interfaces/ICommentModel");
import CommentSchema = require("./../dataAccess/schemas/CommentSchema");
import RepositoryBase = require("./base/RepositoryBase");

class CommentRepository  extends RepositoryBase<ICommentModel> {
    constructor () {
        super(CommentSchema);
    }    
} 

Object.seal(CommentModel);
export = CommentRepository;