import mongoose = require("mongoose");

interface ICommentModel extends mongoose.Document {
  id: string;
  body: string;
  creatAt: Date;
}
export = ICommentModel;

