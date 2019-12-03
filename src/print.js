function printerHandler (req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
}
module.exports = {
    'printerHandler' : printerHandler
}