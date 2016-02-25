# Backbone PubSub

A Simple pubsub extracted from Backbone events

## Installation

    npm install --save backbone-pubsub

## Usage
    var pubsub = require('backbone-pubsub');

    pubsub.on('view:update', function(object) {
      console.log(object);
    });

    pubsub.trigger('view:update', object);

## More
[Backbone Events Docs](http://backbonejs.org/#Events)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/developersoul/backbone-pubsub/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

