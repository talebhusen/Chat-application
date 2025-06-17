const { addMessage, getMessages, uploadFile } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.post("/upload", uploadFile);

module.exports = router;