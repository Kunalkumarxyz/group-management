# 🚀 Group Management System

A simple Node.js and SQLite-based backend API to manage groups and their members.

## 📌 Features
- ✅ Create groups
- ✅ Add members to groups
- ✅ Search groups by name
- ✅ Fetch all groups and their members

## 🔧 Installation & Setup
```sh
# Clone the repository
git clone https://github.com/Kunalkumarxyz/group-management.git

# Navigate to the project folder
cd group-management

# Install dependencies
npm install

# Start the server
node server.js
```

```sh
# Create Group
POST /api/groups
Content-Type: application/json

{
    "name": "Web Developers"
}
```

```sh
# Get All Groups
GET /api/groups
```

```sh
# Search Groups
GET /api/groups/search/{name}
Example: GET /api/groups/search/Web
```

```sh
# Add Member to Group
POST /api/groups/{groupId}/members
Content-Type: application/json

{
    "name": "Kunal Kumar"
}
```

```sh
# Get Group Members
GET /api/groups/{groupId}/members
Example: GET /api/groups/1/members
```
