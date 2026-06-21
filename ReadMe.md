# 🚀 WeMail - Email Assistant

WeMail is a modern AI-powered email management platform that helps users compose, generate, and send professional emails effortlessly. The application leverages AI to generate email content, improve communication, and increase productivity through intelligent automation.

---

## ✨ Features

### 📧 Email Management

* Compose and send emails
* Support for multiple recipients
* Subject and body customization
* Rich text email editor

### 🤖 AI Email Assistant

* Generate professional emails using AI
* Create emails from simple prompts
* Improve email writing quality
* Smart content suggestions

### 📎 File Attachments

* Upload and send documents
* Support for PDF, Images, and other files
* Multipart file handling

### 🔐 Authentication & Security

* Secure user authentication
* Protected API endpoints
* Environment-based configuration

### 🎨 Modern User Interface

* Responsive design
* Built with React and Tailwind CSS
* Clean and intuitive user experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Hooks

### Backend

* Spring Boot
* Spring Mail
* Spring Web
* Spring AI
* Maven

### Database

* MongoDB

### AI Integration

* Gemini API
* Spring AI

---

## 📂 Project Structure

```text
WeMail/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── assets/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── configuration/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/WeMail.git
cd WeMail
```

### Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create an `application.yml` file:

```yaml
spring:
  mail:
    host: smtp.gmail.com
    port: 587
    username: YOUR_EMAIL
    password: YOUR_APP_PASSWORD

  ai:
    openai:
      api-key: YOUR_API_KEY

  data:
    mongodb:
      uri: YOUR_MONGODB_URI
```

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Email Composer
* AI Prompt Box
* Generated Email Output
* File Upload Section

---

## 🔄 Workflow

1. User enters email details.
2. User can optionally provide a prompt for AI.
3. AI generates professional email content.
4. User reviews and edits the email.
5. Attach files if needed.
6. Email is sent through SMTP service.

---

## 🎯 Future Enhancements

* Email Templates
* Scheduled Emails
* Email Analytics
* AI Reply Suggestions
* Email Summarization
* Contact Management
* Docker Deployment
* Kafka Integration
* Redis Caching

---

## 👨‍💻 Author

**Shashank Yadav**

Full Stack Developer | Java Developer | MERN Stack Developer

* Passionate about scalable backend systems
* Interested in AI-powered applications
* Strong focus on DSA and problem solving

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

Happy Coding 🚀
