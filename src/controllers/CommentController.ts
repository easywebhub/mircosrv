import express = require("express");
import CommentBusiness = require("./../app/business/CommentBusiness");
import IBaseController = require("./interfaces/base/BaseController");
import ICommentModel = require("./../app/model/interfaces/ICommentModel");



class CommentController implements IBaseController<CommentBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var comment: ICommentModel = <ICommentModel>req.body;
            var commentBusiness = new CommentBusiness();
            commentBusiness.create(comment, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var comment: ICommentModel = <ICommentModel>req.body;
            var _id: string = req.params._id;
            var commentBusiness = new CommentBusiness();
            commentBusiness.update(_id, comment, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var commentBusiness = new CommentBusiness();
            commentBusiness.delete(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var commentBusiness = new CommentBusiness();
            commentBusiness.retrieve((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var commentBusiness = new CommentBusiness();
            commentBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }


}
export = CommentController;    