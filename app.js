const express = require("express");
const ejs = require("ejs");
const { join, format } = require("path");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per 15 mins
  message: "Too many requests from this IP, try again later."
});

app.set("view engine", "ejs");
app.set("views", join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalLimiter); // apply on all routes

app.get("/", (req, res) => {
  res.render("index", { message: null });
});

app.post("/", async (req, res) => {
  const { name, email, query, description } = req.body;
  if (!name || !email || !query || !description) {
    return res.render("index", { message: "All fields are required!" });
  }

  // console.log(process.env.EMAIL_ID)
  // console.log(process.env.EMAIL_PASS)

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
      },
    });

    let getMailOptions = {
      to: process.env.EMAIL_ID,
      subject: query,
      text: `
            name: ${name}
            email: ${email}
            subject: ${query}
            description: ${description}
            `,
    };

    await transporter.sendMail(getMailOptions);

    let sentMailOptions = {
      from: '"Support Team" <yourcompany@gmail.com>',
      to: email,
      subject: "we've received your query!",
      html: `
      <h2 style="color:#4f46e5">Thank You for Reaching Out!</h2>
      <p>Dear <strong>${name}</strong>,</p>
      <p>We have received your query regarding <strong>${query}</strong>. Our team will contact you soon.</p>
      <p><strong>Email:</strong> ${email}<br>
      <p>Best regards,<br>Support Team<br>Vipin Kumar Vishwakarma</p>
    `,
    };

    await transporter.sendMail(sentMailOptions);
    res.render("index", { message: "✅ Mail sent successfully!" });
  } catch (err) {
    res.render("index", { message: "❌ Failed to send mail. Try again!" });
  }
});


// handle any not defined route
app.all("/*any", (req, res)=> {
    res.render("404");
})

app.listen(port, (err) => {
  if (err) {
    console.log("err while start the server", err);
  }
  console.log(`server is running on port number: ${port}`);
});


// .env file
// EMAIL_ID = YOUR-EMAIL@gmail.com
// EMAIL_PASS = Your-App-Password(16 latters)