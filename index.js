const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

const app = express();

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//init middleware

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

app.listen(PORT, () => console.log(`Server started on ${PORT}`));