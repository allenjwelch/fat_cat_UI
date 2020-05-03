const express = require('express');
const bodyParser = require('body-parser');
const ws = require("nodejs-websocket");
const socketPORT = 6000;
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 6060;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(routes);


// INSERT TESSEL IP ADDRESS HERE. Always prepend with 'ws://' to indicate websocket
const connection = ws.connect(`ws://${process.env.TESSEL_IP}:` + socketPORT, function() {
  // When we connect to the server, send some catchy text
  console.log("Connecting to Tessel...");
  connection.sendText("Connecting to Tessel...")
});

// When we get text back
connection.on('text', function(text) {
  // print it out
  console.log("Echoed back from Tessel:", text);
})

// app.get('/api/hello', (req, res) => {
//     res.send({ express: 'Hello From Express' });
// });

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
