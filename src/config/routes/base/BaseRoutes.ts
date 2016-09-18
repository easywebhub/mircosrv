import express = require("express");
import CommentRoutes =  require("./../CommentRoutes");
var app = express();
class BaseRoutes {
    
    get routes() {
        app.use("/", new CommentRoutes().routes);
        return app;
    }
}
export = BaseRoutes;