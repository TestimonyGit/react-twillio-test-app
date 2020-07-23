const twilio = require('twilio');
const credentials = require('./credentials.json');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const accountSid = credentials.accountSid;
const authToken = credentials.authToken;

const client = twilio(accountSid, authToken);
const VoiceResponse = twilio.twiml.VoiceResponse;

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, './../build/static/')));
app.use('/', express.static(path.join(__dirname, './../build/')));

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, './../build/index.html'))
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.post('/call', function(request, response) {
    const clientNumber = request.body.clientNumber;
    const url = 'http://' + request.headers.host + '/outbound/' + encodeURIComponent(clientNumber);

    const options = {
        to: credentials.adminNumber,
        from: credentials.twilioNumber,
        url: url,
    };

    client.calls.create(options)
      .then((message) => {
        console.log(message.responseText);
        response.send({
            message: 'Thank you! We will be calling you shortly.',
        });
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send(error);
      });
});

app.post('/outbound/:clientNumber', function(request, response) {
    const clientNumber = request.params.clientNumber;
    const twimlResponse = new VoiceResponse();

    twimlResponse.say('You will be contacted shortly with the client ' + clientNumber + '. Please wait.',
                      { voice: 'alice' });

    twimlResponse.dial(clientNumber);

    response.send(twimlResponse.toString());
});


/*client.messages.create({
  to: '+' + credentials.toNumber,
  from: '+' + credentials.fromNumber,
  body: 'Hello there!'
})
.then(message => console.log(message))
.catch(error => console.log(error));*/

/*

client.calls.create({
  twiml: '<Response><Say>Ahoy, World!</Say></Response>',
  to: '+' + credentials.toNumber,
  from: '+' + credentials.fromNumber
})
.then(call => console.log(call.sid))
.catch(error => console.log(error));

*/