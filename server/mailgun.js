try {
  require('dotenv').config();
} catch (err) {
}

const mailgun = require("mailgun.js");
const keys = require('./keys');


const mg = mailgun.client({
  username: "api",
  key: keys.key,
  public_key: keys.public_key
});
const send = (req, res, next) => {
  if (!req.recaptcha.error) {
    mg.messages
      .create("brad@sandbox3b21fda428c043e482ddbdfa2c9ab28c.mailgun.org", {
        from: `${req.body.name} <${req.body.email}>`,
        to: "vamshidhar490@outlook.com",
        subject: `🚀 portfolio contact`,
        text: req.body.fields
      })
      .then(response => {
        res.status(200);
        res.send({
          success: true
        });
      });
  } else {
    res.status(401);
    res.send({
      error: "recaptcha not solved"
    });
  }
};

module.exports = send;
