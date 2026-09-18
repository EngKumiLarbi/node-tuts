const http = require ('http');

const server = http.createServer((req,res)=>{
    
    if (req.url ==='/'){
     res.end('the server is listening from the homepage')
    }

    else if (req.url ==='/about'){
     res.end('the server is reponding to the about page request')
    }

    else {
        res.statusCode =404;
        res.end ('ops! this page is not available')
    }

})



//listening port 
server.listen(5000)