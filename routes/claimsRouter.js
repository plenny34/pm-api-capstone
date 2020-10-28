const express = require('express');
const controller = require('../controllers/claimsController');

const router = () => {
  const claimsRouter = express.Router();

  const {
    getAllClaims,
    getClaimById,
    addNewClaim,
    updateClaimById,
    deleteAllClaims,
    deleteClaimById
  } = controller();

  claimsRouter.get('/', getAllClaims);
  claimsRouter.get('/:id', getClaimById);
  claimsRouter.post('/', addNewClaim);
  claimsRouter.put('/:id', updateClaimById);
  claimsRouter.delete('/', deleteAllClaims);
  claimsRouter.delete('/:id', deleteClaimById);

  return claimsRouter;
};

module.exports = router;

