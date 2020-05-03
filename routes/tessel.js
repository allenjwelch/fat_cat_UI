const router = require("express").Router();

// Matches with "/t2"
router.post("/feed", function (req, res) {
    res.send('req')
})

router.get("/status", function (req, res) {
    res.send('status')
})
  
module.exports = router;