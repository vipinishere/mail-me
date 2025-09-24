# 📩 Mail-Me

A simple and modern **contact form project** built with **Express.js**, **EJS**, and **TailwindCSS**, which allows users to send queries directly via email.  
It includes **rate limiting**, and **popup messages** for better UX.

---

## ✨ Features
- 📬 Contact form with **Name, Email, Query, and Description**
- ✅ Acknowledgment email sent to the customer
- 🔒 Rate limiting to prevent abuse (spam protection)
- 🎨 Modern UI with **TailwindCSS**
- ⚡ Popup message with dismiss (cross ❌ button + auto-hide)
- 🌐 Deployed on Render **[Open Website](http://localhost:3000)**

---

## 📂 Project Structure
```bash
user-task-management/        
├── public/           # Public files
├── views/            # EJS templates
├── app.js            # Express app config. & server entry point
├── .env              # Environment variables
├── package.json
└── README.md
```
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/vipinishere/mail-me.git
cd mail-me
```
---

### 2️⃣ Install dependencies
```bash
npm install
```
---
### 3️⃣ Configure environment variables
Create a `.env` file
```bash
PORT=3000
EMAIL_ID=yourcompany@gmail.com
EMAIL_PASS=your-app-password
```

⚠️ For Gmail, use an App Password instead of your real password.
Generate one from Google Account > Security > App Passwords

---
### 4️⃣ Run the server
```bash
npm start
```
server will run at 👉 `http://localhost:3000`

---
## 🚀 Usage

1. Open `http://localhost:3000/`

2. Fill the contact form (Name, Email, Query, Description)

3. Submit → Email is sent to both:

4. Admin (your mail inbox)

5. Customer (acknowledgment mail)

6. Popup will show confirmation/error message.

---
## 🛡 Security
* **Rate Limiting:** Prevents spam requests
---

## 📧 Example Acknowledgment Mail

```bash
Subject: We’ve received your query!

Hello {Your-Name},

We have received your query regarding "Given Query".
Our team will get back to you as soon as possible.

Regards,
Support Team
```

---

## 📦 Tech Stack
* **Backend**: Node.js, Express.js
* **View Engine**: EJS
* **Styling**: TailwindCSS
* **Email**: Nodemailer
* **Security**: express-rate-limit

---

## 📜 License

##### This project is licensed under the MIT License.

---

## 👨‍💻 Author

📧 [vishwakarmavipin3434@gmail.com]
🌐 [https://github.com/vipinishere]