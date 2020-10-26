

const policyController = () => {

  const createPolicy = (req, res) => {
    res.json({
      message: 'Using the constroller',
      requestBody: req.body
    });
  };

  const getPolicies = (req, res) => {
    res.json({ message: 'Hitting the get' });
  };

  return {
    createPolicy,
    getPolicies
  }

}

module.exports = policyController;
