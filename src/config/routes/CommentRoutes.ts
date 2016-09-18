import express = require("express");
import CommentController = require("./../../controllers/CommentController");

var router = express.Router();
class CommentRoutes {
    private _CommentController: CommentController;
    
    constructor () {
        this._CommentController = new CommentController();   
    }
    get routes () {
        var controller = this._CommentController;
        router.get("/comment", controller.retrieve);
        router.post("/comment", controller.create);
        router.put("/comment/:_id", controller.update);
        router.get("/comment/:_id", controller.findById);
        router.delete("/comment/:_id", controller.delete);
        
        return router;
    }
    
    
}

Object.seal(CommentRoutes);
export = CommentRoutes;