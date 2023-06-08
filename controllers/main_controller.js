const device = require ('../config/device');
var sensorData = {
    temperature : "0.00",
    humidity : "0.00"
}
device.on('connect', function() {
    console.log('Connected to ESP8266 Device');
    device.subscribe('esp8266/pub');
  });

device.on('message', function(topic, payload) {
    console.log("Message : ") ; console.log( topic, payload.toString());
    sensorData = JSON.parse(payload.toString());
  });

device .on('reconnect', function() {
         console.log('reconnect');
      });
device.on('offline', function() {
         console.log('offline');
      });
device.on('error', (error) => {
  console.error('AWS IoT error:', error);
});


module.exports.home = async function (req,res){          // Module.exports because we want to send this function to route when home page route is requested
    try {
            return res.render('home', {
                title: "Shashank's Home"  ,
                temperature : sensorData.temperature ,
                humidity : sensorData.humidity,
            })
 
    } catch(err){
        console.log(err);
    }
    
}

module.exports.sensorData = async function (req,res){

    return res.status(200).json( {
        message : "Sensor data",
        temperature : sensorData.temperature ,
        humidity : sensorData.humidity,
    })

}

module.exports.LEDcontrol = async function (req,res){
       let data = req.body;
       console.log(data);
       device.publish('esp8266/sub', JSON.stringify(data));
}

