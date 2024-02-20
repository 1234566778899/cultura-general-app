const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.json());
const port = process.env.PORT || 4000;

app.use(cors({ origin: ['https://cultura-general-web.vercel.app', 'http://localhost:3000'] }));

app.get('/', (req, res) => {
    res.send('v.1.0.13')
})

app.use('/api', require('./routes/index'));

app.listen(port, () => {
    console.log('server running on port: ' + port);
})