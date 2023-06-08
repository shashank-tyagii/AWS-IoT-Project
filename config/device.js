const fs = require('fs');
const awsIot = require('aws-iot-device-sdk');

// Set up the connection options
    const options = {
        privateKey: fs.readFileSync('C:/Users/user/Documents/aws_certificates/private.pem'),
        clientCert: fs.readFileSync('C:/Users/user/Documents/aws_certificates/device_certificate.pem'),
        caCert: fs.readFileSync('C:/Users/user/Documents/aws_certificates/AmazonRootCA1.pem'),
        clientId: 'iotconsole-20a97fe2-5b20-4e74-b77a-5378ab8aced0',
        host: 'avglbvv7vep02-ats.iot.eu-north-1.amazonaws.com',
    };

    // Create an instance of the device
const device = awsIot.device(options);
module.exports = device;
