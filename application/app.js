
const express = require('express')
const app = express()
const port = 3000


//comments endpoint
app.use('/api/comments', require('./routes/api/comments'));

//users endpoint
app.use('/api/users', require('./routes/api/users'));

//posts endpoint
app.use('/api/posts', require('./routes/api/posts'));


//run the server
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})