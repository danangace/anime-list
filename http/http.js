const http = require('http');
const app = require('../app')
const httpServer = http.createServer(app)
const PORT = process.env.PORT || 3000


httpServer.listen(PORT, () => {
  console.log(`Server listen to port: ${PORT}`);
})