# Backend Node.js Express with Firebase

A RESTful API backend built with Node.js, Express, and Firebase integration, ready for deployment on Vercel.

## 🚀 Features

- **RESTful API** with Express.js
- **JWT Authentication** for secure access
- **Firebase Integration** for data storage
- **CORS Support** for cross-origin requests
- **Product Management** CRUD operations
- **Vercel Ready** for easy deployment

## 📁 Project Structure

```
├── src/
│   ├── controllers/     # Business logic
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   ├── data/           # Data files
│   │   ├── data.js
│   │   └── products.json
│   ├── middlewares/    # Express middlewares
│   │   └── authentication.js
│   ├── models/         # Data models
│   │   └── products.model.js
│   ├── routers/        # API routes
│   │   ├── auth.router.js
│   │   └── products.router.js
│   ├── services/       # Service layer
│   │   └── products.services.js
│   └── utils/          # Utility functions
│       └── token-generator.js
├── .env                # Environment variables
├── index.js            # Main application file
└── package.json        # Dependencies and scripts
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend-nodejs-express-firebase-vercel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   
   # Firebase Configuration
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   FIREBASE_MEASUREMENT_ID=your_measurement_id
   
   # JWT Secret
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 📋 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/login` | User login | ❌ |

### Products

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Get all products | ✅ |
| GET | `/api/products/:id` | Get product by ID | ✅ |
| POST | `/api/products/create` | Create new product | ✅ |
| PUT | `/api/products/:id` | Update product | ✅ |
| DELETE | `/api/products/:id` | Delete product | ✅ |

## 📝 JSON Examples

### Authentication

#### Login Request
```json
{
  "email": "user@gmail.com",
  "password": "strongPass123"
}
```

#### Login Response (Success)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGdtYWlsLmNvbSIsImlhdCI6MTY0MjU4NzIwMCwiZXhwIjoxNjQyNTkwODAwfQ.abc123def456"
}
```

#### Login Response (Error)
```json
{
  "error": "Unauthorized"
}
```

### Products

#### Product Object Structure
```json
{
  "id": "4TG2Rcu5pncgNrdJXdeP",
  "name": "Vulpix",
  "sku": "PKM001005",
  "description": "Pokemon Figure",
  "price": 5799.99,
  "stock": 10,
  "category": "Pokemon"
}
```

#### Get All Products Response
```json
[
  {
    "id": "4TG2Rcu5pncgNrdJXdeP",
    "name": "Vulpix",
    "sku": "PKM001005",
    "description": "Pokemon Figure",
    "price": 5799.99,
    "stock": 10,
    "category": "Pokemon"
  },
  {
    "id": "PDT46LQctCiRO2rttLBc",
    "name": "Pikachu",
    "sku": "PKM001001",
    "description": "Electric Pokemon Figure",
    "price": 6299.99,
    "stock": 15,
    "category": "Pokemon"
  }
]
```

#### Get Product by ID Response
```json
{
  "id": "4TG2Rcu5pncgNrdJXdeP",
  "name": "Vulpix",
  "sku": "PKM001005",
  "description": "Pokemon Figure",
  "price": 5799.99,
  "stock": 10,
  "category": "Pokemon"
}
```

#### Create Product Request
```json
{
  "name": "Charizard",
  "sku": "PKM001006",
  "description": "Fire-type Pokemon Figure",
  "price": 8999.99,
  "stock": 5,
  "category": "Pokemon"
}
```

#### Create Product Response
```json
{
  "id": "newGeneratedId123",
  "name": "Charizard",
  "sku": "PKM001006",
  "description": "Fire-type Pokemon Figure",
  "price": 8999.99,
  "stock": 5,
  "category": "Pokemon",
  "createdAt": "2025-07-17T00:00:00.000Z"
}
```

#### Update Product Request
```json
{
  "name": "Charizard Shiny",
  "price": 9999.99,
  "stock": 3,
  "description": "Rare Shiny Fire-type Pokemon Figure"
}
```

#### Update Product Response
```json
{
  "id": "4TG2Rcu5pncgNrdJXdeP",
  "name": "Charizard Shiny",
  "sku": "PKM001006",
  "description": "Rare Shiny Fire-type Pokemon Figure",
  "price": 9999.99,
  "stock": 3,
  "category": "Pokemon",
  "updatedAt": "2025-07-17T00:00:00.000Z"
}
```

#### Delete Product Response
```json
{
  "message": "Product deleted successfully",
  "deletedId": "4TG2Rcu5pncgNrdJXdeP"
}
```

### Error Responses

#### Authentication Error
```json
{
  "error": "No se encontró el header Authorization"
}
```

#### Invalid Token Format
```json
{
  "error": "Formato del header Authorization inválido"
}
```

#### Product Not Found
```json
{
  "error": "Product not found",
  "id": "invalidProductId"
}
```

#### Validation Error
```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "name",
      "message": "Name is required"
    },
    {
      "field": "price",
      "message": "Price must be a positive number"
    }
  ]
}
```

## 🔧 Usage Examples

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@gmail.com",
    "password": "strongPass123"
  }'
```

### Get All Products
```bash
curl -X GET http://localhost:3000/api/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Get Product by ID
```bash
curl -X GET http://localhost:3000/api/products/4TG2Rcu5pncgNrdJXdeP \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Create Product
```bash
curl -X POST http://localhost:3000/api/products/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Charizard",
    "sku": "PKM001006",
    "description": "Fire-type Pokemon Figure",
    "price": 8999.99,
    "stock": 5,
    "category": "Pokemon"
  }'
```

### Update Product
```bash
curl -X PUT http://localhost:3000/api/products/4TG2Rcu5pncgNrdJXdeP \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Charizard Shiny",
    "price": 9999.99,
    "stock": 3
  }'
```

### Delete Product
```bash
curl -X DELETE http://localhost:3000/api/products/4TG2Rcu5pncgNrdJXdeP \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables**
   Add your environment variables in the Vercel dashboard or via CLI:
   ```bash
   vercel env add
   ```

## 📦 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not configured yet)

## 🔧 Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Firebase** - Database and authentication
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server auto-restart

## 🛡️ Security Features

- JWT token validation
- CORS configuration
- Input validation middleware
- Environment variable protection

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Carmen Diaz** - [carmendiazit](https://github.com/carmendiazit)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Made with ❤️ using Node.js and Express**
