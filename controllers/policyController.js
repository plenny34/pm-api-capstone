const Policy = require('../models/policy');
const mongoose = require('mongoose');

async function connectToDb() {
  const dbUrl = 'mongodb://localhost:27017/policyManager';
  await mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
  return mongoose.connection;
}

const controller = () => {
  const getAllPolicies = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        Policy.find({})
          .then(data => {
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          })
          .finally(() => {
            connection.close();
          });
      }()
    );
  };

  const getPolicyById = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        const id = req.params.id;
        Policy.findById(id)
          .then(data => {
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          })
          .finally(() => {
            connection.close();
          });
      }()
    );
  }

  const addNewPolicy = (req, res) => {
    if (!req.body.name) {
      res.status(400).send('You must provide a name field');
    } else {
      (async function () {
          const connection = await connectToDb();
          const policy = new Policy(req.body);
          policy.save()
            .then(data => {
              res.status(200).json(data);
            })
            .catch(err => {
              res.status(400).json({message: "Failure to create policy"})
            })
            .finally(() => {
              connection.close();
            });
        }()
      );
    }

  };

  const updatePolicyById = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        const id = req.params.id;
        Policy.updateOne({_id: id}, req.body)
          .then(data => {
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          })
          .finally(() => {
            connection.close();
          });
      }()
    );
  }

  const deletePolicyById = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        const id = req.params.id;
        Policy.deleteOne({_id: id})
          .then(data => {
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          })
          .finally(() => {
            connection.close();
          });
      }()
    );
  }

  const deleteAllPolicies = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        Policy.deleteMany({})
          .then(data => {
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          })
          .finally(() => {
            connection.close();
          });
      }()
    );
  }

  return {
    getAllPolicies,
    getPolicyById,
    addNewPolicy,
    updatePolicyById,
    deletePolicyById,
    deleteAllPolicies
  }
}

module.exports = controller;
