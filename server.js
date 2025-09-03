const HTTP = require('node:http');
const PORT = 3000;
const HOST = "http://localhost";

const stats = require('./viewRAM.js');

HTTP.createServer((req, res) => {
    let url = req.url;

    if(url === "/"){
        res.end("<h2>Server is runing!</h2>");
        return
    }
    
    if(url === "/stats"){
        res.end(JSON.stringify(stats, null, 2));
        return
    }
        
    res.end("<h2>Pagina não encontrada</h2>");
    

    
}).listen(PORT, () => {
    console.log(`Follow link => ${HOST}:${PORT}`);
});