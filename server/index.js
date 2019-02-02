const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Loading Routes
const posts = require('./routes/api/posts');

// Use routes
app.use('/api/posts', posts);

// db config
// const db = require('./config/keys').mongoURI;

//connect to mongo
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to the database!');
//   })
//   .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${port}`));
