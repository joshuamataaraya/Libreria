var express         =       require("express");
var multer          =       require('multer');
var app             =       express();
var upload      =   multer({ dest: './app/img/Products'});

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

app.post('',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }

    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
