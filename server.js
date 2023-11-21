const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const  dotenv= require('dotenv');
const Razorpay = require('razorpay');
const authRoutes = require('./Routes/auth');
const paymentroutes = require('./Routes/payment');

dotenv.config()
const RAZORPAY_TEST_API_KEY = 'rzp_test_g2I6WR0wz3KR6W';
const RAZORPAY_API_SECRET='ZQe8TJp3nvD9YuLW6xyH0MA9';


const app = express();
const port = 8000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());
app.use('/', authRoutes,bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ankit@934',
  database: 'enquiry',
});

db.connect((err) => {
  if (!err) {
    console.log('Connected to MySQL Database');
  } else {
    console.error('Error connecting to MySQL Database:', err.message);
  }
});





app.post('/submit', bodyParser.json(), (req, res) => {
  console.log(req.body);
  const { FirstName, LastName, Email, PhoneNumber, JobTitle, WebsiteUrl } = req.body;
  const Tbl_HookCard = { FirstName, LastName, Email, PhoneNumber, JobTitle, WebsiteUrl };

  db.query('INSERT INTO Tbl_HookCard SET ?', Tbl_HookCard, (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.message);
      res.status(500).json({ message: 'Error submitting data' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data submitted successfully' });
    }
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + ''));
app.use('/payment',paymentroutes,bodyParser.json());
app.get('/index', (req, res) => {
  res.redirect('/index.html');
});


app.get('/getkey', (req, res,next) => {
  res.status(200).json({
    key: RAZORPAY_TEST_API_KEY,
    secret : RAZORPAY_API_SECRET,

  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
