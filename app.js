
//import database(json) files
const hospitals=require('./services/db/hospitalsDB');
const illnesses=require('./services/db/illnessDB');
const {calcWaitingTime}=require('./controllers/patientController')
let patients=[];

const path = require('path')
const express = require('express')
const hbs = require('hbs')
import bodyParser from 'body-parser';


const {createElement}=require("./utils/utils.js");
// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

 
// Get list of hospitals based on pain level
app.get('/api/hospitals', (req, res,next) => {
  let waitingTimeList=calcWaitingTime(parseInt(req.query.painLevel),hospitals)
    res.status(200).send(waitingTimeList)
    
   });
// Get list of all hospitals
app.get('/api/illnesses', (req, res,next) => {
  res.status(200).send(illnesses)
});

app.get('', (req, res) => {
  res.render('index', {
      title: 'Hospital',
      name: 'Sarah'
  })
})
//Create a patient
app.post('/api/patients',(req, res) => {
  //Requires name,illnessId,painLevel filled by user in 'createElement function'
  const receivedPatient = createElement("patients", req.query);
  if (receivedPatient) {
    patients.push(receivedPatient);
    res.status(201).send(receivedPatient);
  } else {
    res.status(400).send("please fill all the parameters");
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});