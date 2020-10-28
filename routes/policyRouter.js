const express = require('express');
const controller = require('../controllers/policyController');

const router = () => {
  const policyRouter = express.Router();

  const {
    getAllPolicies,
    getPolicyById,
    addNewPolicy,
    updatePolicyById,
    deleteAllPolicies,
    deletePolicyById
  } = controller();

  policyRouter.post('/', addNewPolicy);
  policyRouter.put('/:id', updatePolicyById);
  policyRouter.get('/', getAllPolicies);
  policyRouter.get('/:id', getPolicyById);
  policyRouter.delete('/:id', deletePolicyById);
  policyRouter.delete('/', deleteAllPolicies);

  return policyRouter;
}

module.exports = router;







// const { createPolicy, getPolicies } = controller;


// const router = () => {
//   policyRouter.route('/').post((req, res) => {
//     res.json({ message: 'Using the router' });
//   });
//
//   return policyRouter;
// };
//
// module.exports = router;
