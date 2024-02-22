const express = require("express");
const app  = express();
const cors = require('cors');
const connectDatabase = require('./config/dbConfig');
app.use(express.json());
require("dotenv").config({ path: './config/.env' });
app.use(cors());

const allowedOrigins = [
    "https://book-my-doc-one.vercel.app",
    "http://localhost:3000",
  ];
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  );

  router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

//connecting to database
connectDatabase();

const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const doctorRouter = require('./routes/doctorRoutes');

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log("Server is running on Port:", PORT);
})