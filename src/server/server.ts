//import * as express from 'express';

//let app = express();
//let port = process.env.PORT || 8080;

class Server {
  private app : express;
  private port : number;
  constructor(app: express, port: number) {
    this.app = app();
    this.port = port;
  }
  run(): void {
    this.app.get('/', (req, res) => {
      res.json({"menu": {
                          "id": "file",
                          "value": "File",
                          "popup": {
                            "menuitem": [
                              {"value": "New", "onclick": "CreateNewDoc()"},
                              {"value": "Open", "onclick": "OpenDoc()"},
                              {"value": "Close", "onclick": "CloseDoc()"},
                              {"value": "Cancel", "onclick": "CloseDoc()"}
                            ]
                          }
                        }});
    });

    this.app.listen(this.port, () => {
      console.log(`==== Server started at ${this.port} ====`);
    });
  }
}

export default Server;
//new Server(express, port).run();