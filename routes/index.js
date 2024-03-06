const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);
router.use((req, res) => {
    return res.status(404).send('Route not found');
});

// export the router
module.exports = router;