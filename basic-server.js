const http = require("http");

const server = http.createServer(function( req, res){
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); //status code HTTP 200 / OK

    let dataObj = { id: 123456, name: "zain-azam-mirza", email: "zain.azam@softoo.co"};
    let data = JSON.stringify(dataObj);
    res.end(data);
});

server.listen(1234, function(){
    console.log("Listening on port 1234");
});