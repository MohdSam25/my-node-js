const http = require ('http')
const server = http.createServer((req,res) => {
    if ( req.url == '/'){
        res.end ('welcome to page');
        return;
    }
    if (req.url == '/about'){
        res.end('about the page');
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p> this is page u r not looking</p>
    <a href = "/"> back home <a>`);
})

server.listen(5000)