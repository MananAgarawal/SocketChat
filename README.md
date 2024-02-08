# SocketChat - Scalable Real Time chat web Application

SocketChat is a real-time communication web application that enables instant messaging and connection between users. With a simple and intuitive interface, SocketChat provides a seamless platform for chatting, connecting, and sharing in real time. <br>

Live Site -> https://socket-chat-client-lbl3.onrender.com

## Features

- Real-Time Chat: Instantaneous messaging with other users.
- User Registration: Create an account for a personalized chat experience.
- User Authentication: Securely log in to access your account.
- Seamless Connection: Effortlessly connect with other users in real time.

## Getting Started

### Prerequisites

- Node.js and npm installed

### Setting Up Locally

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/socketchat.git
2. Configure environment variables <br>
Create a .env file in the root directory (Server and Client) and set the necessary environment variables, including MongoDB connection string, JWT secret, etc. <br>
Example .env file:
    ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/socketchat
    JWT_SECRET=your_jwt_secret
3. Start the application 
    ```bash
    npm run start
