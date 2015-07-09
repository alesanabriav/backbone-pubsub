#Backbone PubSub
A Simple pubsub extracted from Backbone events

##Installation
    npm install --save backbone-pubsub

## Usage
    pubsub.on("alert", function(msg) {
      alert("Triggered " + msg);
    });

    pubsub.trigger("alert", "an event");

## More
[Backbone Events Docs](http://backbonejs.org/#Events)