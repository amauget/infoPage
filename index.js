const http = require('http')

const fs = require('fs')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html') //indicates the response type as HTML

    let path = './src/'

    try{
        switch(req.url){
            case('/'):
                path += 'index.html'
                res.statusCode = 200
                console.log(path)
                break
    
            case('/about'):
                path += 'about.html'
                res.statusCode = 200
                break
            
            case('/contact-me'):
                path += 'contact-me.html'
                res.statusCode = 200
                break
            
            default:
                throw err
        }
    }
    catch(err){
        path = './src/404.html'
        res.statusCode = 404
    }
    

    fs.readFile(path, (err, data) => {
        if(err){
            console.error(err)
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(3000, 'localhost', () =>{
    console.log('listening on port 3000.')
})