const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const policyRouter = require('./routes/policyRouter')();
const claimsRouter = require('./routes/claimsRouter')();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json('You hit the server');
});

app.use('/api/policies', policyRouter);
app.use('/api/claims', claimsRouter);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
