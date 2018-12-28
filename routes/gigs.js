const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//Get gig list
router.get('/', (req, res) =>
  Gig.findAll()
    .then(gigs => {
      console.log(gigs, 'printing gigs');
    })
    .catch(error => console.log(error))
);
//Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Looking for simple wordpress website',
    technologies: 'wordpress, php, HTML, CSS',
    budget: '$5,000',
    description:
      'lorem iencieun einco einc e9uvheinv eneifvn-eufv  oiuenv eiunv oeinvoeiuvn einve ienv oeuinv jfnbvpiubv vdojvnifuvn ',
    contact_email: 'user2@emiail.com'
  };
  let { title, technologies, budget, description, contact_email } = data;
  //add to table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;
