const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');


router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homepageRoutes);


// FOR ANY FALSE ENDPOINTS 
router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;