const Claim = require('../models/claim');
const mongoose = require('mongoose');

async function connectToDb() {
  const dbUrl = 'mongodb://localhost:27017/policyManager';
  await mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
  return mongoose.connection;
}

const controller = () => {
  const getAllClaims = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        Claim.find({})
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

  const getClaimById = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        const id = req.params.id;
        Claim.findById(id)
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

  const addNewClaim = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        const claim = new Claim(req.body);
        claim.save()
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

  const updateClaimById = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        const id = req.params.id;
        Claim.updateOne({_id: id}, req.body)
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

  const deleteClaimById = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        const id = req.params.id;
        Claim.deleteOne({_id: id})
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

  const deleteAllClaims = (req, res) => {
    (async function () {
        const connection = await connectToDb();

        Claim.deleteMany({})
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
    getAllClaims,
    getClaimById,
    addNewClaim,
    updateClaimById,
    deleteClaimById,
    deleteAllClaims
  }
}

module.exports = controller;

