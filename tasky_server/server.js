const express = require('express');
const cors = require('cors');
const setHeaders = require('./middleware/setHeaders');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

const corseOptions = {
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]
}; 

app.use(cors(corseOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(setHeaders);

db.sequelize.sync({force: true});

//routes 
app.use(authRoutes);
app.use(taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});