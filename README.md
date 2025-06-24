# EvaluX – Project Assessment & Skill Validation Platform

EvaluX is a platform for validating **skills through real-world project assessments**. Learners and professionals can submit their projects across various domains to receive **structured feedback**, **AI-driven evaluation** and optionally a **verified certificate**.

In early phases, we are focusing on **software and programming projects**, with plans to expand into **design, business, 3D modeling and other fields** in future iterations.


## 🚀 Problem Statement

Traditional certification systems (like those on platforms such as Udemy) often fail to reflect a learner's actual skills. Learners may complete a course but still not demonstrate practical, real-world application of what they’ve learned.

EvaluX addresses this by offering a **real-world project submission** process where learners can showcase their skills and receive a **verified skill certificate** based on the quality of their project.

## 💡 Our Approach

EvaluX is designed with **two core user groups** in mind:

1. **B2C (Direct-to-Learner)**: Independent learners and developers submitting projects to get feedback and certifications.
2. **B2B (Course Platform Integration)**: Educational institutions, online course platforms and companies integrating EvaluX to provide verified certifications for their students based on project submissions.

### **Stages for Both B2C & B2B**
---

### **1. B2C (Independent Learners)**

#### **Stage 1: Project Upload**
- **User**: Independent learners visit EvaluX platform.
- **Action**: Upload their project via GitHub link or by submitting project files (zip).
- **Platform**: No course association; the learner is uploading any personal or self-created project.
- **Backend**: 
  - Use **OpenAI** for skill detection.
  - **Static Code Analysis** (using Semgrep) to analyze code quality.
  - **AI** checks for structure and the use of technologies.

#### **Stage 2: Evaluation Process**
- **User**: After submission, EvaluX starts the evaluation.
- **Backend**: 
  - Analyze code using automated tools.
  - Provide feedback about project quality (best practices, code structure, etc.)
  - If project quality is sufficient, issue a **verified skill certificate**.
  - Provide **feedback for improvement** if the project does not meet standards.

#### **Stage 3: Feedback & Certification**
- **User**: Receives feedback on their project, including strengths and areas for improvement.
- **Backend**: 
  - Generate a **PDF certificate** if the project is of sufficient quality.
  - Offer suggestions for improvement and allow users to **resubmit** their projects.

---

### **2. B2B (Course Platforms & Institutions)**

#### **Stage 1: Course Setup**
- **Course Provider (e.g., Udemy)**: Upload course metadata (title, description, syllabus) to the EvaluX API or dashboard.
- **Backend**: 
  - Use **NLP** to map courses to appropriate skill tracks (e.g., Python Basics, Web Development, etc.).

#### **Stage 2: Learner Enrolls in Course**
- **User**: Learns the course on the platform as usual (Udemy, Coursera, etc.).
- **Platform**: No changes here.

#### **Stage 3: Project Submission**
- **User**: Learner submits their project after completing the course. 
- **Platform**: Platform prompts the user to submit their project for a verified certificate.
- **Backend**: Platform sends the project to EvaluX API.

#### **Stage 4: Evaluation Process**
- **Backend**: 
  - EvaluX uses **static code analysis**, **OpenAI-powered skill detection** and **optional peer review**.
  - EvaluX matches the submitted project against the course's **skill track**.
  - EvaluX returns a **pass/fail result**, **evaluation score** and **feedback report**.

#### **Stage 5: Feedback & Certification**
- **Platform**: 
  - Displays the **verified certificate** if the project passes.
  - If the project does not meet standards, feedback is provided with suggestions for improvement.

---

## 🏆 Benefits of EvaluX

1. **For Learners (B2C)**: 
   - Get **real feedback** on projects.
   - Receive **verified certificates** to boost credibility.
   - Improve skills with personalised suggestions.

2. **For Course Platforms (B2B)**:
   - **Automate** the validation of learner projects.
   - **Enhance certification value** with project-based validation.
   - Reduce manual evaluation effort and time.

3. **For Institutions & Hackathons**:
   - Easily evaluate **multiple projects**.
   - Use **EvaluX’s feedback system** to guide participants.
   - **Showcase** verified projects to employers or recruiters.

---

# 🧠 EvaluX – Project Validation & Feedback System

EvaluX is an AI-powered platform that validates and evaluates coding projects in both **B2B** (course-based certificate validation) and **B2C** (individual project review) formats. This document outlines the **stage-wise evaluation process** and **criteria for certification or feedback**.

---

## 📦 B2B – Course-Linked Project Certification

Projects submitted through educational platforms (like Udemy, college LMS, etc.) are validated to ensure they reflect the **concepts taught in the course**.

### 🔁 Validation Stages (with Explanation)

| **Stage** | **Name** | **What It Checks** |
|-----------|----------|--------------------|
| Stage 1 | 📂 Upload & Prep | Prepares the code and project files for analysis |
| Stage 2 | 🤖 AI Detection | Analyses how much of the code is AI-generated vs human-edited |
| Stage 3 | ▶️ Execution Check | Ensures the project runs without critical errors |
| Stage 4 | 🧠 Concept Match | Verifies if project reflects key course concepts (e.g. loops, OOPs, DB use) |
| Stage 5 | ✍️ Syntax & Style | Checks for clean code, formatting and adherence to best practices |
| Stage 6 | 📁 Structure Check | Evaluates folder organisation, naming, separation of concerns |
| Stage 7 | 🧰 Tech Stack Analysis | Detects libraries, frameworks, tools used in the project |
| Stage 8 | 📄 Final Report + Certificate | Generates full evaluation + certificate if eligible |

---

## 👨‍🎓 B2C – Independent Project Review

In the B2C flow, individual users can upload any project to get a **complete feedback report**, including AI assistance level, execution, code quality and improvement suggestions. **No certificate is issued.**

### 🔁 Evaluation Stages (with Explanation)

| **Stage** | **Name** | **What It Checks** |
|-----------|----------|--------------------|
| Stage 1 | 📂 Upload & Prep | Prepares the code for evaluation |
| Stage 2 | 🤖 AI Detection | Detects the percentage of AI-generated vs. human-edited content |
| Stage 3 | ▶️ Execution Check | Validates if the project runs successfully |
| Stage 4 | ✍️ Syntax & Style | Analyzes for linting, formatting, and readability |
| Stage 5 | 📁 Structure Check | Reviews project organization and directory hygiene |
| Stage 6 | 🧰 Tech Stack Detection | Lists all libraries, APIs and frameworks used |
| Stage 7 | 🧪 Effort/Originality | Provides feedback on how unique or modified the project is |
| Stage 8 | 📊 Final Report | Delivers detailed scorecard with suggestions, no certificate |

---

## 🎓 Certificate Eligibility (B2B Only)

For a project to qualify for **certification**, it must meet the following:

| **Criteria** | **Required** | **Details** |
|--------------|--------------|-------------|
| ✅ Project Executes | Yes | Must compile and run |
| ✅ Course Concept Match | Yes | Should reflect ≥60% of course-taught topics |
| ✅ Syntax Score | Yes | Must score ≥70% |
| ✅ Structure Score | Yes | Must score ≥70% |
| ❌ Tech Stack | Optional | Adds depth but not mandatory |
| ❌ Custom Test Cases | Optional | Can be defined by the partner platform |

📌 **Note:** These thresholds are **customizable** by the course provider or platform.

---

# 📦 EvaluX – Business Model & Pricing Structure

EvaluX is designed as a platform to validate and evaluate **technical projects** (initially focused on coding), for both **individual learners (B2C)** and **institutions or course platforms (B2B)**.

We adopt **two independent business models**:
- **B2C**: Individual learners submit their projects to receive automated AI-based evaluation reports.
- **B2B**: Platforms like Udemy, colleges, bootcamps, etc., integrate EvaluX for course-based project validation, unlocking certification and analytics.

EvaluX follows a **flexible, scalable** monetisation strategy with a clear **future pricing roadmap** based on product maturity and user growth.

---


## 🏢 B2B Pricing Plan (For Course Platforms, Institutions)

| Feature                   | 🟩 Starter (₹7,999) | 🔵 Growth (₹17,999) | 🟦 Enterprise (₹29,999) |
|---------------------------|-------------------|---------------------|-------------------------|
| Monthly Project Limit     | 500               | 1500                | 3000+                   |
| Skill Tracks              | 5                 | 15                  | Unlimited               |
| AI Project Validation     | ✅                | ✅                  | ✅                      |
| Certificate Engine        | ✅                | ✅                  | ✅                      |
| Custom Test Rules         | ❌                | ✅ (Basic)          | ✅ (Advanced)           |
| Expert Network Access     | ❌                | ✅ (Limited)        | ✅ (Full)               |
| Student Feedback Reports  | ✅                | ✅                  | ✅                      |
| Admin Advanced Exports    | ❌                | ❌                  | ✅                      |

---

## 📄 B2B Plan Explanation

- **Starter Plan (₹7,999/month)** is ideal for small course creators or academic institutions running 2–5 courses.
- **Growth Plan (₹17,999/month)** is built for medium-scale bootcamps or online platforms that manage 10–15 skill tracks.
- **Enterprise Plan (₹29,999/month)** supports full integration, with advanced customization and reporting, tailored for large-scale platforms.

---

## 📅 B2B Duration Plans

| Plan       | Monthly       | Quarterly         | Yearly            |
|------------|----------------|--------------------|--------------------|
| Starter    | ₹7,999         | ₹21,999 (Save ₹2k) | ₹83,999 (Save ₹11k)|
| Growth     | ₹17,999        | ₹49,999 (Save ₹4k) | ₹1,84,999 (Save ₹31k)|
| Enterprise | ₹29,999        | ₹84,999 (Save ₹5k) | ₹3,29,999 (Save ₹30k)|

---

## 👤 B2C Credit-Based Model (For Individual Users)

| Pack Name        | Credits | Projects | Price   | Approx Price/Project |
|------------------|---------|----------|---------|-----------------------|
| Starter          | 60      | 2        | ₹29     | ₹14.5                 |
| Plus             | 150     | 5        | ₹69     | ₹13.8                 |
| Pro              | 300     | 10       | ₹149    | ₹14.9                 |
| Elite            | 600     | 20       | ₹299    | ₹14.5                 |

> 🔁 **Each project validation = 30 credits**

---

## 🔁 B2C Free Credits & Referral Boost

| Action                | Bonus Credits |
|-----------------------|----------------|
| New Sign-Up           | 120 Credits    |
| Referral (Invite Sent) | 60 Credits     |
| Referral (Code Used)  | 60 Credits     |

---

## 📄 B2C Plan Explanation

- Learners get a **report card-style breakdown** of their project’s structure, readability, AI-generated vs human content and concept usage.
- This helps them benchmark their skills before submitting to jobs, hackathons or competitions.
- Premium credit packs offer high-value project insights at very low per-project cost.

---

## 📈 Future Pricing Strategy (B2B)

| Phase           | Starter Plan     | Growth Plan      | Enterprise Plan   |
|------------------|------------------|------------------|------------------|
| MVP Launch       | ₹7,999/month     | ₹17,999/month     | ₹29,999/month     |
| Early Scale      | ₹9,999/month     | ₹21,999/month     | ₹34,999/month     |
| Full-Scale Model | ₹11,999/month    | ₹24,999/month     | ₹39,999/month     |

> Pricing will increase only if platform value (speed, features, security) increases significantly.

---

## 📉 Future B2C Credit Pricing Roadmap

| Phase           | Price/Project Range |
|------------------|---------------------|
| MVP Launch       | ₹9.9 – ₹14.9         |
| Early Scale      | ₹12 – ₹17            |
| Full-Scale Model | ₹14 – ₹20+           |

> Maintain low entry pricing for maximum reach, then scale with improved validation quality and wider domain support.

---

## 🚀 Notes

- Project credit costs can vary in future for different **domains** (e.g., AI projects, IOT, Game Dev).
- Advanced institutional features such as **custom analytics dashboards**, **plagiarism detection** and **bulk student reports** will be available in Growth and Enterprise tiers only.
- EvaluX’s primary strength lies in its **fully AI-driven validation pipeline** without relying on human reviewers.

**🔚 End of Business Model Document**

---

# ⚙️ EvaluX – Tech Stack & MVP Architecture

This document outlines the complete **tech stack**, **MVP planning** and **modular development flow** for EvaluX an AI-powered project validation platform.

---

## 🧠 Tech Stack Overview

| Layer               | Technology Used                                                        |
|---------------------|------------------------------------------------------------------------|
| **Frontend**        | React.js (Vite), Tailwind CSS                                           |
| **Backend**         | Node.js + Express.js (App logic), Python + FastAPI (AI validation API) |
| **Database**        | MongoDB + Mongoose (for user/project data, credits, reports)            |
| **Authentication**  | JWT (Token-based login), EmailJS or Firebase Auth (optional)            |
| **Code Analysis**   | Python, Semgrep (static analysis), OpenAI API (LLM-based inspection)    |
| **File Handling**   | AWS S3 for storing uploaded projects and reports                        |
| **Payments**        | Razorpay or Stripe API                                                  |
| **Deployment**      | Vercel (frontend), Railway/Render (backend), Namecheap/GoDaddy (domain) |
| **Testing**         | Jest (React), Pytest (Python), Postman, Cypress (optional)              |

---

## 🚀 MVP Roadmap – Titles & Focus

| MVP  | Title                                | Core Focus                                                              |
|------|--------------------------------------|--------------------------------------------------------------------------|
| 1️⃣   | Static UI for Project Upload         | Basic B2C UI – file input form, dropdowns, no backend or logic          |
| 2️⃣   | Validation Engine (AI Core)          | Core logic to evaluate and score projects using Python-based FastAPI    |
| 3️⃣   | Credit System + Payment Integration  | Connect UI + validation engine, add credits, referrals, Razorpay etc.   |
| 4️⃣   | Testing & QA                         | Validate flows, bug-fix, test with real and AI-generated projects       |
| 5️⃣   | Deployment & Soft Launch (B2C)       | Public deployment for friends/colleges — close feedback loop            |

---

## 🔁 MVP → Production Flow (Reusable Model)

| MVP    | System Component               | Reusable In Future MVPs / Production? |
|--------|--------------------------------|--------------------------------------|
| MVP 1  | UI Form, Project Upload        | ✅ Yes – used in both B2C and B2B     |
| MVP 2  | Validation Engine (Python)     | ✅ Yes – core logic for all models    |
| MVP 3  | Credit & Payment Integration   | ✅ Yes – same logic scaled in future  |
| MVP 4  | QA & Bugfix Sprint             | ✅ Yes – final testing base           |
| MVP 5  | Public B2C Launch              | 🚀 Final MVP build, ready for scale   |

---

## 📦 MVP Feature + Tech Stack Table

| MVP  | Features / Deliverables                                                                                   | Tech Stack Used                                                                                   |
|------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 1️⃣   | - Project upload form (ZIP/GitHub)<br>- Language & skill selection<br>- Confirmation screen               | React.js, Tailwind CSS, Vercel                                                                     |
| 2️⃣   | - Python-based validation engine<br>- Code structure check<br>- Syntax clarity<br>- AI-origin analysis    | Python, FastAPI, Semgrep, OpenAI API, GitHub API, Pytest                                           |
| 3️⃣   | - Auth system<br>- Credit/referral logic<br>- Payment gateway<br>- Connect frontend to backend engine    | Node.js, Express.js, MongoDB, Mongoose, JWT, Razorpay API, React Query, Axios                     |
| 4️⃣   | - Upload test dataset (100+ projects)<br>- Test API endpoints<br>- Debug score accuracy<br>- Fix issues   | Pytest, Postman, Jest, Cypress, Sample datasets, Python/JS loggers                                 |
| 5️⃣   | - Final polish and bugfixes<br>- Add terms/privacy UI<br>- Deploy with domain and file storage backend   | Vercel (frontend), Railway/Render (backend), AWS S3 (files), Namecheap (domain), EmailJS (contact) |

---

## ⚙️ Backend Architecture (for All Stages)

1. **API Layer**: 
   - RESTful API to support course metadata upload (B2B).
   - Support project submission and evaluation requests from users (B2C).
2. **AI and Static Code Analysis**:
   - OpenAI API for skill detection from project code.
   - Semgrep for static code analysis.
3. **Certificate Generation**:
   - Dynamically generate PDF certificates.
4. **Database**:
   - MongoDB to store project details, evaluation results, feedback, and certificates.

---


