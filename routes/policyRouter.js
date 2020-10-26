const express = require('express');
const controller = require('../controllers/policyController')();
const policyRouter = express.Router();

const { createPolicy, getPolicies } = controller;

policyRouter.get('/', getPolicies);

policyRouter.post('/', createPolicy);

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
