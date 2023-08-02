const async = require('async'); 

// Assume you have an array of candidate objects retrieved from the Excel file
const candidates = [
  { A: 'name',B: 'email',C: 'mobile',D: 'dateofbirth', E: 'Workexperience', F: 'Postaladdress',G: 'Currentemployee',H: 'CurrentDestination',  },
  { A: 'name',B: 'email',C: 'mobile',D: 'dateofbirth', E: 'Workexperience', F: 'Postaladdress',G: 'Currentemployee',H: 'CurrentDestination',  },
  
];

// Define an asynchronous function to process each candidate
function processCandidate(candidate, callback) {
 

  // Simulate an asynchronous task with setTimeout
  setTimeout(() => {
    console.log(`Processing candidate: ${candidate.name}`);
    callback(); // Call the callback to indicate the task is done
  }, 1000); // Adjust the timeout as needed
}

// Use async.eachSeries to process candidates one by one
async.eachSeries(
  candidates,
  (candidate, next) => {
    processCandidate(candidate, () => {
      next(); // Call 'next' to move to the next candidate
    });
  },
  (err) => {
    if (err) {
      console.error('Error processing candidates:', err);
    } else {
      console.log('All candidates processed successfully.');
    }
  }
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Call the connect function to establish the connection
connect();

  async function checkDuplicates() {
    const db = client.db('assignment'); // Replace with your database name
    const collection = db.collection('employee'); // Replace with your collection name
  
    for (const row of data) {
      // Check if a document with the same values exists in the collection
      const existingDocument = await collection.findOne(row);
  
      if (existingDocument) {
        console.log('Duplicate found:', row);
        // Handle the duplicate data as per your requirements
      } else {
        console.log('No duplicate found:', row);
        // Process the row or insert it into the collection
      }
    }
  }
  
  // Call the checkDuplicates function to start the duplicate check
  checkDuplicates();
);
