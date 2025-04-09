# 🌐 Skill-Sharing & Virtual Learning Hub

A real-time collaborative platform designed to empower students by enabling them to share skills, host learning sessions, collaborate on real-world projects, and engage in productive discussion forums.

---

## 🎯 Vision

To build an interactive and user-friendly learning environment where students can:
- 🌟 Showcase their skills and portfolios  
- 📚 Join and host virtual learning sessions  
- 🤝 Collaborate on projects  
- 🧠 Engage in skill-based matchmaking and discussions  

---

## 🛠️ Tech Stack

| Layer       | Technologies Used                         |
|-------------|--------------------------------------------|
| **Frontend** | HTML, CSS, JavaScript, React.js           |
| **Backend**  | Node.js, Express.js                       |
| **Database** | MySQL or PostgreSQL                       |
| **Real-time**| WebRTC (video), WebSockets (chat system) |

---

## 🎨 UI/UX Design Preferences

- Background: `#f7f7e6` (light)
- Secondary Color: `#68b0ab`
- Accent Color: `#3b6064`
- Text:
  - Primary: `#000000` (for headings/important text)
  - Secondary: `#ffffff` (on dark backgrounds)
- Style: Smooth gradients, subtle animations, and engaging illustrations
- Navigation: Responsive across devices, with profile icon & toggle on the right

---

## ✅ Completed Features & Pages

### 1. 🔓 **Landing, Login, and Sign-Up**
- Fully responsive and styled
- Username/email validation
- Temporary data stored in `localStorage` until account creation

### 2. 🔐 **OTP Verification Page**
- Six-digit OTP field with auto navigation between inputs
- Simulated validation using static OTP `123456`
- On success: moves to `set-password.html`

### 3. 🔒 **Set Password Page**
- Validates password (min. 6 characters & a letter)
- Confirms password match
- On success:
  - Shows confirmation alert
  - Clears `localStorage` (email, username)
  - Redirects to `account-created.html`

### 4. ✅ **Account Created Page**
- Final confirmation screen
- Includes "Login Here" button
- Prevents back navigation
- Clears session storage (if any)

---

## 🧩 File Structure Overview

| File/Folder         | Purpose                                      |
|---------------------|----------------------------------------------|
| `account-created.html/css` | Confirmation page after signup       |
| `auth.html/css`     | Sign-in/sign-up UI                           |
| `dashboard.html/css`| User dashboard interface                     |
| `home.html/css`     | Landing page                                 |
| `otp.html` + `otp.js`| OTP verification logic                      |
| `profile.html/css`  | User profile page                            |
| `set-password.html/css` | Set and confirm password page           |
| `Assets/`           | Stores images, logos, etc.                   |
| `README.md`         | Project description (this file)              |
| `.gitignore`        | Files/folders to be excluded from GitHub     |

---

## 🔄 Current State

The project has completed the onboarding flow from landing page to account creation, ensuring smooth transitions and validation. Page structure is mobile and desktop responsive.

Next steps:
- Integrate **MySQL** for storing user data (name, email, username, encrypted password)
- Maintain **session flow**
- Optionally use **Sequelize ORM** or direct SQL queries

---

## 🔜 Upcoming Features

- 👤 User Dashboard
- 🧑‍💻 Virtual Classrooms (WebRTC)
- 🗃️ Project Collaboration Board
- 🧠 Skill-Based Matchmaking
- 💬 Real-time Discussions & Q/A
- 📊 Live Polls & Voting system

---

## 📽️ Preview

A Demo video or screenshot will soon be here for a better visual understanding of the platform.

---

## 🤝 Contributions

Developed by:

- **Abdul Samad** – [GitHub](https://github.com/Iam-AbdulSamad)
- **AlphaaXin** – [GitHub](https://github.com/AlphaaXin)

> This project is under continuous development and is open to student collaboration!

---

## 🧠 Want to Contribute?

1. Mail to the mohdabdulsamad2000@gmail.com
2. Fork the repo
3. Clone your forked repo
4. Create a new branch
5. Make changes
6. Commit and push
7. Open a pull request

---


