const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("resumes");
});

router.post("/", (req, res) => {

});

module.exports = router;