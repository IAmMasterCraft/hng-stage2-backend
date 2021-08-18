const { Router } = require("express");

const router = Router();

const { home } = require("../controllers/home.controller");
const { contact } = require("../controllers/contact.controller");

/* GET home response. */
router.get("/", home);

/* GET contact form. */
router.get("/contact", contact);

/* POST contact form. */
router.post("/contact", contact);

module.exports = router;
