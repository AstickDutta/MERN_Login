const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 5000
mongoose.set("strictQuery", true);

// // database connection
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

