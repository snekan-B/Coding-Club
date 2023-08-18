const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const app = express();

const dbUri =
  "mongodb+srv://srivatsan:gL2PeXtFCsLXbIfC@cluster0.xd31wsk.mongodb.net/event?retryWrites=true&w=majority";

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service provider
  auth: {
    user: "srivatsan950@gmail.com",
    pass: "mpuzrfxpbskorpto",
  },
});

const vacancySchema = new mongoose.Schema({
  name: String,
  age: String,
  dept: String,
  subject: String,
  reason: String,
});

const Vacancy = mongoose.model("vacancy", vacancySchema);

UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: false,
  },
  subject: {
    type: String,
    required: [false],
    unique: true,
  },
  department: {
    type: String,
    required: [false],
    unique: true,
  },
  name: { type: String, required: false },
});

const Users = mongoose.model("user", UserSchema);

app.use(cors());

app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  const subject = req.body.subject;
  console.log(req.body);

  Users.find({ subject: subject })
    .then((users) => {
      console.log(users);
      for (let i = 0; i < users.length; i++) {
        const mailOptions = {
          from: "srivatsan950@gmail.com",
          to: users[i].email,
          subject: "Faculty Position: Join Our Team!",
          text:
            `Dear ${users[i].name},\n\n` +
            `Exciting faculty position available in ${users[i].department} at St.Joseph's College Of Engineering.\n\n contact 93223423432 for queries`,
          // You can also include HTML content:
          // html: '<h1>Hello</h1><p>This is a test email.</p>',
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
          } else {
            console.log("Email sent:", info.response);
          }
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });

  const newData = new Vacancy(req.body);
  newData.save();
});

app.listen(4000, () => {
  console.log("server started");
});
