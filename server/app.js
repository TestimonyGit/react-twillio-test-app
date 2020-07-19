const accountSid = '';//process.env.TWILIO_ACCOUNT_SID;
const authToken = '';//process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);


client.calls.create({
  twiml: '<Response><Say>Ahoy, World!</Say></Response>',
  to: '+',
  from: '+'
})
.then(call => console.log(call.sid))
.catch(error => console.log(error));


/*
client.messages.create({
  to: '+',//process.env.MY_PHONE_NUMBER,
  from: '+',
  body: 'HI THERE'
})
.then(message => console.log(message))
.catch(error => console.log(error));
*/