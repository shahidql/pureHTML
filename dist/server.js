"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let app = express();
//let port = process.env.PORT || 8080;
class Server {
    constructor(app, port) {
        this.app = app();
        this.port = port;
    }
    run() {
        this.app.get('/', (req, res) => {
            res.json({ "menu": {
                    "id": "file",
                    "value": "File",
                    "popup": {
                        "menuitem": [
                            { "value": "New", "onclick": "CreateNewDoc()" },
                            { "value": "Open", "onclick": "OpenDoc()" },
                            { "value": "Close", "onclick": "CloseDoc()" },
                            { "value": "Cancel", "onclick": "CloseDoc()" },
                            { "value": "New1", "onclick": "CreateNewDoc()" },
                            { "value": "Open1", "onclick": "OpenDoc()" },
                            { "value": "Close1", "onclick": "CloseDoc()" },
                            { "value": "Cancel1", "onclick": "CloseDoc()" }
                        ]
                    }
                } });
        });
        this.app.listen(this.port, () => {
            console.log(`==== Server started at ${this.port} ====`);
        });
    }
}
exports.default = Server;
//new Server(express, port).run(); 
//# sourceMappingURL=server.js.map