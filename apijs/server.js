const http = require('http')
const products = require ('./data/products')

const server = http.createServer((req, res) => {
    if(req.url === '/api/products') {
        res.writeHead(200, {'Content-Type': 'application/jspn'})
        //res.write(JSON.stringify(products))
        res.end(JSON.stringify(products))
    } else {
        res.writeHead(404, {'Content-Type': 'application/jspn'})
        //res.write(JSON.stringify(products))
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on port ${PORT}`))