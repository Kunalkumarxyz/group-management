# 📌 Group Management API  

This project is a **Group Management System** that allows users to:  
✔️ Create groups  
✔️ Add members to groups  
✔️ Search for groups  

## 🔧 Setup Instructions  

1️⃣ **Clone the repository:**  
```sh
git clone https://github.com/Kunalkumarxyz/group-management.git
cd group-management

2️⃣ Install dependencies
    npm install

3️⃣ Start the server:
    node server.js

📡 API Endpoints

1️⃣ Create a Group
    POST /api/groups

Request Body:

{
  "name": "Web Developers"
}

2️⃣ Get All Groups
    GET /api/groups

3️⃣ Search Groups by Name
    GET /api/groups/search?name=Web

4️⃣ Add Member to Group
    POST /api/groups/:groupId/members

Request Body:

{
  "name": "Kunal Kumar"
}


📡 Deployment

Live API Link: https://group-management-xec8.onrender.com
Maintained by: Kunal Kumar
GitHub: https://github.com/Kunalkumarxyz









