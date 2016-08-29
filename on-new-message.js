/* 
 * a Cisco Spark webhook that leverages a simple library (batteries included)
 * 
 * note : this example requires that you've set a SPARK_TOKEN env variable 
 *  
 */

var SparkBot = require("./sparkbot/webhook");

// Starts your Webhook with default configuration where the SPARK API access token is read from the SPARK_TOKEN env variable 
var bot = new SparkBot();

bot.on('messages', 'created', function(trigger) {
  console.log("new message from: " + trigger.data.personEmail + ", in room: " + trigger.data.roomId);
  
  bot.decryptMessage(trigger, function (err, message) {

    if (err) {
      console.log("could not decode message, err: " + err.message); 
      return;
    }

    //
    // YOUR CODE HERE
    //
    console.log("processing message contents: " + message.text);

  });
  
});

