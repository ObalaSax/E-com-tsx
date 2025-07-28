//Imports
const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors");
const { prototype } = require("pg/lib/type-overrides");
dotenv.config();

const server = express();
const serverPort = process.env.SERVER_PORT;

// Middleware
server.use(express.json()); // To parse JSON request bodies
server.use(cors()); // Enable CORS for all origins (for development)

const myPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

//Databasr Connection
myPool.connect((err) => {
  if (err) {
    console.error("Check you database Big Man", err);
  } else {
    console.log("Tuko ndani, Database it OOONN!!!");
  }
});

// Import routes
const userRoutes = require("./routes/users");
server.use("/users", userRoutes);

//Listening to the server port
server.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

/*


// PostgreSQL Pool setup

    
    // Test database connection
    pool.connect((err, client, done) => {
        if (err) {
            console.error("Database connection error:", err.stack);
            } else {
                console.log("Connected to PostgreSQL database");
                client.release(); // Release the client back to the pool
                }
                });
                
                // --- API Endpoints ---
                
                // 1. Register User
                app.post("/register", async (req, res) => {
                    const { fname, lname, email, phone, password, confirmPassword } = req.body;
                    
                    // Basic validation
                    if (!fname || !lname || !email || !password || !confirmPassword) {
                        return res
                        .status(400)
                        .json({ message: "All fields (except phone) are required." });
                        }
                        if (password !== confirmPassword) {
                            return res.status(400).json({ message: "Passwords do not match." });
                            }
                            if (password.length < 6) {
                                // Example: enforce minimum password length
                                return res
                                .status(400)
                                .json({ message: "Password must be at least 6 characters long." });
                                }
                                
                                try {
                                    // Hash the password
                                    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
                                    
                                    // Insert user into database
                                    const result = await pool.query(
                                        "INSERT INTO users (fname, lname, email, phone, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING id",
                                        [fname, lname, email, phone, hashedPassword],
    );

    res
    .status(201)
    .json({
        message: "User registered successfully!",
        userId: result.rows[0].id,
      });
  } catch (error) {
    if (error.code === "23505") {
      // PostgreSQL unique violation error code
      // Check if the error is for email or phone
      if (error.detail.includes("email")) {
        return res.status(409).json({ message: "Email already registered." });
    }
      if (error.detail.includes("phone")) {
        return res
        .status(409)
        .json({ message: "Phone number already registered." });
    }
    return res
    .status(409)
    .json({ message: "A user with this detail already exists." });
    }
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Server error during registration." });
}
});

// 2. Login User
// For login, we will typically use email or username. Let's stick with email for this example.
app.post("/login", async (req, res) => {
  const { email, password } = req.body; // Login with email
  
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
    }
    
    try {
        // Find user by email
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
    ]);
    
    if (result.rows.length === 0) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    const user = result.rows[0];
    
    // Compare provided password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    // If valid, send success response (in a real app, you'd send a JWT token here)
    res.status(200).json({
        message: "Login successful!",
      user: {
        id: user.id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        phone: user.phone,
    },
});
} catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Server error during login." });
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

*/
