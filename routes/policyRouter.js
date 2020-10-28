const express = require('express');
const controller = require('../controllers/policyController');
const policyRouter = express.Router();

policyRouter.post('/', controller.create_policy_post);

module.exports = policyRouter;







// const { createPolicy, getPolicies } = controller;

// policyRouter.get('/', getPolicies);

// const router = () => {
//   policyRouter.route('/').post((req, res) => {
//     res.json({ message: 'Using the router' });
//   });
//
//   return policyRouter;
// };
//
// module.exports = router;
