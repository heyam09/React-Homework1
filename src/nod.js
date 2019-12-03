
const http = require('http');
const camera = require('./camera')
const server = http.createServer((req,res) => {
    console.log(req.url);
    if (req.url.startsWith('/products/camera')){
        camera(req, res);
        res.end('Servering camera\n');
    } else if (req.url.startsWith('/products/printer')) {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Servering printer\n');
    }else {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Servering Home\n');
    }
});
server.listen(5000, () => {
    console.log('server is running in port 5000')
})