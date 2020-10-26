const express = require('express');
const policyRouter = express.Router();

policyRouter.get('/', (req, res) => {
  res.json({ message: 'Hitting the get' });
});

policyRouter.post('/', (req, res) => {
  res.json({
    message: 'Using the router',
    requestBody: req.body
  });
});

module.exports = policyRouter;

// const router = () => {
//   policyRouter.route('/').post((req, res) => {
//     res.json({ message: 'Using the router' });
//   });
//
//   return policyRouter;
// };
//
// module.exports = router;
