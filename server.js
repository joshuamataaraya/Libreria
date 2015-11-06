var express         =       require("express");
var multer          =       require('multer');
var app             =       express();
var server          =   app.listen(8000);
var io              =       require('socket.io').listen(server)
var nodemailer = require('nodemailer');
var upload      =   multer({ dest: './app/img/Products'});



var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'adrianlq8@gmail.com',
        pass: '' //hay que crear una cuenta especial para mnemonic
    }
});

// send mail with defined transport object

io.on("connection", function(socket) {
    socket.on('email', function(msg){
        var mailOptions = {
            from: 'Mnemonic ✔ <adrianlq8@gmail.com>', // sender address
            to: 'adrianlq8@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: msg // plaintext body
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    })
});



app.use(multer({ dest: './app/img/Products',
    rename: function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
    }
}));

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

// Set up the request
var post_req = http.request(post_options, function(res) {
   res.setEncoding('utf8');
   res.on('data', function (chunk) {
       console.log('Response: ' + chunk);
   });
});
      res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname));

app.post('/',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }

    });
});
