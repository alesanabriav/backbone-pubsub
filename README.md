#Backbone PubSub
A Simple pubsub extracted from Backbone events

##Installation
    npm install --save backbone-pubsub

## Usage
    var pubsub = require('backbone-pubsub');

    pubsub.on('view:update', function(object) {
      console.log(object);
    });

    pubsub.trigger('view:update', object);

## More
[Backbone Events Docs](http://backbonejs.org/#Events)