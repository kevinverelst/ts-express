import * as http from 'http';

import App from './App';

debug('ts-express:server');

const defaultPort: number = 3000;
const port = normalizePort(process.env.PORT || defaultPort);
App.set('port', port);

const server = http.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: any|number): number {
    let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    }
}

// TODO onError and on Listening