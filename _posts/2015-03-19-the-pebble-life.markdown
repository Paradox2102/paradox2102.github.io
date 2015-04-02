---
layout: post
title:  "Pebble, Why its awesome"
date:   2015-03-19 12:12:12
---

##Smartwatches
>Its like the future man

Ive had my pebble for a while now and its been awesome! (well besides the fact that I have RMA'd it twice now..) What makes it so awesome one might ask?
Being able to get notificaions on your wrist and not having to take your phone out of your pocket to switch songs.

As you may have assumed those are my main uses for it really. Sure there are some other things I use it for, alarms, timing stuff, but thats just normal watch stuff. One of the main things I have learned to love about the pebble is the ease of use of it. The app just works on android (Im android :( sorry ios guys) download it, log in, and all notificaions and everything are there on your wrist. The app store isnt the best but it does a dang good job. You can mostly find what you want and just install it right then and there. For some cases though you have to do more elaborate things to get the watchface or app you want.

###Making Pebble Apps
As I fell in love with Pebble I decided it was time to jump into the world of making apps for Pebble. After some looking around I discovered [CloudPebble](https://cloudpebble.net) my first reaction was DANG, This is nice! And currently that is still how I feel about it. Thier developement enviroment is super nice and easy to use and testing/troubleshooting couldnt be easyer. Being able to click a button and withing 15 or so seconts have the app compiled and sent to your watch is the coolest thing ever. Whats even better is if you dont have a Pebble or dont have one with you, they have a online Pebble emulator!

####Pebble.JS

I have messed around with making apps in Pebble.Js and I love it! Its so simple to make online stuff and have it work nicely! Here is a example from one of the pebble apps I have made [LinusPebbleTips](https://github.com/Wferr/LinusPebbleTips). Aibetit its not the prettest code at all it works and im proud of it!

    // Requires
    var UI = require('ui');
    var ajax = require('ajax');
    var Settings = require('settings');
    var Accel = require('ui/accel');
    //var Vector2 = require('vector2');
    //Settings
    Settings.config(
    { url: 'http://linustechtips.com/main/?app=core&module=global&section=login?cm_api=true'}
    );
    // Splash Window
    var splashWindow = new UI.Card({
    title:'Fetching Data',
    subtitle:'Please Wait'
    });
    splashWindow.show();
    var API ='http://linustechtips.com/main/page/api.php';
    var updateData = function(){
    ajax(
    {
        url: API,
        type: 'json',
    },
    function(data) {
    console.log("Grabbed data");
    var infoCard = new UI.Menu({
    sections: [{
    title: 'LinusTech Tips',
    items: [{
    title: 'Username',
    subtitle: data.display_name
    /*      Menu.on('select', function(e) {
    console.log('Fetching Profile Image');
    var profileWindow = new UI.Window();
    var profileImg = new UI.Image ({
    posisiton: new Vector2 (0,0),
    size: new Vector2 (144,144),
    image: data.profile_image
    });
    profileWindow.add(profileImg);
    profileWindow.show();
    }),
    */
    }, {
    title: 'New Messages',
    subtitle: data.new_pms
    }, {
    title: 'New Notifications',
    subtitle: data.new_notifications
    }]
    }]
    });
    infoCard.hide();
    infoCard.show();
    splashWindow.hide();
    },
    function(error) {
    console.log("Error fetching Data");
    });
    };
    //Call Function to Update Data
    updateData();
    //Start Accelerometer Refresh 
    Accel.init();
    Accel.on("tap", updateData(), console.log('Updated Data'));

Being able to that easly step into something and make a usefull app like that is one of the reasons I feel pebble will be a game changer in the smart watch industry.

Apple Watch and Android Wear sorry, my wrist is for [Pebble](http://getpebble.com)

Also on the Pebble Time and Pebble Time Steel, Its awesome but I dont have the money for it right now. :(