var express         =       require("express");
var multer          =       require('multer');
var app             =       express();
var server          =   app.listen(3000);
var io              =       require('socket.io').listen(server)
var nodemailer = require('nodemailer');
var upload      =   multer({ dest: './app/img/Products'});
var compra ="";
var islogged = "";
var email = "";

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'adrianlq8@gmail.com',
        pass: 'Lopezx01' //hay que crear una cuenta especial para mnemonic
    }
});

// send mail with defined transport object

io.on("connection", function(socket) {
    socket.on('email', function(msg, usr ){
        var mailOptions = {
            from: 'Mnemonic ✔ <mnemonicsalib@gmail.com>', // sender address
            to: usr, // list of receivers
            subject: 'Compra', // Subject line
            text: msg // plaintext body
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });
    });
    socket.on('varcompra', function(product){
        compra = compra + product +",";
        console.log(compra);    
    });
    socket.on('retcompra', function(){
        compra = compra;
        console.log(compra);
        io.to(socket.id).emit('compras', compra);  
    });
    socket.on('elimcompra', function(){
        compra = "";
        console.log(compra);  
    });
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


app.use(express.static(__dirname));

app.post('/',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }

    });
});
