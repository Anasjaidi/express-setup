const app = require('./app')


const port = app.get('port')
const env = app.get('env')
const debug = app.get('debug')

// start listening on port specified
server.listen(port);

server.on("listening", () => {
    console.log(`* Environment : ${env}`);
    console.log(`* Debugger : ${debug ? "On" : "Off"}`);
    console.log(`* Running on http://localhost:${port} (CTRL + C to quit)`);
});

