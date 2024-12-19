const express = require("express");
const cors = require("cors");
const { authenticateDB } = require("./config/config");
const dotenv = require("dotenv");

// Setup environment variables
dotenv.config();

// Inisialisasi Express
const app = express();

// Konfigurasi CORS
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://agro-verse-front-end-three.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors()); // Middleware CORS tanpa opsi untuk debugging
app.use(express.json());

// Debugging Middleware
app.use((req, res, next) => {
  console.log(`Request diterima: ${req.method} ${req.url}`);
  next();
});

// Autentikasi database
authenticateDB();

// Import routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const ForumRoutes = require("./routes/forum");
app.use("/api/forum", ForumRoutes);

const ProductRoutes = require("./routes/product");
app.use("/api/product", ProductRoutes);

const CategoryRoutes = require("./routes/category");
app.use("/api/category", CategoryRoutes);

const SuggestionRoutes = require("./routes/suggestion");
app.use("/api/suggestion", SuggestionRoutes);

const WebinarRoutes = require("./routes/webinar");
app.use("/api/webinar", WebinarRoutes);

const UserRoutes = require("./routes/user");
app.use("/api/user", UserRoutes);

// Menangani OPTIONS preflight request
app.options("*", cors());

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
