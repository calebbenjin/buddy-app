# 📊 Buddy Dashboard

A responsive dashboard application built with React, Redux Toolkit, and Tailwind CSS. This platform includes authentication, protected routes, and chat functionality with file previews.

## My blocker
I noticed that the registration process does not trigger an OTP to be sent. As a workaround, I simulated the process — meaning during signup, you can enter any number as the OTP and it will be accepted.

Additionally, since there's no provided mobile design, I prioritized making the main dashboard view responsive, while temporarily excluding the chat screen from mobile responsiveness.


---

## 🚀 Features

- User Authentication with OTP verification
- Protected Routes
- Redux Toolkit with RTK Query for API integration
- Chat UI with file preview (PDF/Image)
- Mobile sidebar with overlay and toggle
- Lazy-loaded routes and components
- Fully responsive dashboard layout
- Toast notifications for user feedback

---

## 🛠 Tech Stack

| Category          | Tech                     |
|-------------------|--------------------------|
| Frontend          | React + TypeScript       |
| Styling           | Tailwind CSS             |
| Routing           | React Router DOM         |
| State Management  | Redux Toolkit            |
| Data Fetching     | RTK Query (Redux Toolkit)|
| Form Handling     | React Hook Form + Zod    |
| Notifications     | React Toastify           |
| Icons             | React Icons              |
| Code Splitting    | React.lazy + Suspense    |
| Session Storage   | `sessionStorage`         |

---

## 📦 Getting Started

## View the live demo 
https://buddy-app-fd3h.vercel.app/dashboard

### 1. Clone the repository

```bash
git clone https://github.com/calebbenjin/buddy-app.git
cd buddy-app




npm install
# or
yarn install


