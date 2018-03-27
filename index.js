const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
  userName: 'zllamo',
  password: 'walton!3',
  server: 'zdb1.database.windows.net',
  options: {
    database: 'zdb',
    encrypt: true
  }
};

var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           console.log("Connected!")
       }
   }
 );
