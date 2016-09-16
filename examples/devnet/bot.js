/* 
 * a bot that help you get orientation at DevNet
 * 
 */

var debug = require("debug")("samples");
var fine = require("debug")("samples:fine");

// Starts your Webhook with default configuration where the SPARK API access token is read from the SPARK_TOKEN env variable 
var SparkBot = require("../../sparkbot/webhook");
var bot = new SparkBot();

var SparkClient = require("node-sparky");
var spark = new SparkClient({ token: process.env.SPARK_TOKEN });


bot.onCommand("about", function (command) {
    spark.messageSendRoom(command.message.roomId, {
        markdown: "```\n{\n   'author':'Brought to you by Cisco DevNet',\n   'code':'https://github.com/ObjectIsAdvantag/sparkbot-webhook-samples/blob/master/examples/devnet/bot.js',\n   'description':'find next DevNet event coming close to you',\n   'healthcheck':'GET https://heroku/',\n   'webhook':'POST https://heroku/'\n}\n```"
    });
});


bot.onCommand("fallback", function (command) {
    // so happy to join
    spark.messageSendRoom(command.message.roomId, {
        text: "sorry, I did not understand"
    })
        .then(function (message) {
            // show how to use
            showHelp(command.message.roomId);
        });
});
bot.onCommand("help", function (command) {
    showHelp(command.message.roomId);
});
function showHelp(roomId) {
    spark.messageSendRoom(roomId, {
        markdown: "I can tell about DevNet events\n- /about\n- /help\n- /next [#max]: show upcoming #max events, defaults to 5\n- /now: show events happening now\n"
    });
}


bot.onCommand("next", function (command) {

    // let's acknowledge we received the order
    spark.messageSendRoom(command.message.roomId, {
        markdown: "_heard you! asking my crystal ball..._"
    });

    var limit = command.args[0];
    if (!limit) limit = 5;
    if (limit < 1) limit = 1;

    Events.fetchNext(limit, function (err, events) {
        if (err) {
            spark.messageSendRoom(command.message.roomId, {
                 markdown: "**sorry, ball seems broken :-(**"
            });
            return;
        }

        spark.messageSendRoom(command.message.roomId, {
            markdown: events
        });  
    });
});


bot.onCommand("now", function (command) {
    // let's acknowledge we received the order
    spark.messageSendRoom(command.message.roomId, {
        markdown: "_heard you! let's check what's happening now..._"
    });

    Events.fetchCurrent(function (err, events) {
        if (err) {
            spark.messageSendRoom(command.message.roomId, {
                 markdown: "**sorry, could not contact the organizers :-(**"
            });
            return;
        }

        spark.messageSendRoom(command.message.roomId, {
            markdown: events
        });  
    });
});



