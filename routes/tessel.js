const router = require("express").Router();

// Matches with "/t2"
router.post("/feed", function (req, res) {
    console.log(req)
    res.send('feed')
})

router.get("/status", function (req, res) {
    res.send('status')
})
  
module.exports = router;