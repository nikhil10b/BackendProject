var express     = require('express');  
var mongoose    = require('mongoose');  
var multer      = require('multer');  
var path        = require('path');  
var userModel   = require('./models/userModel');  
var excelToJson = require('convert-excel-to-json');
var bodyParser  = require('body-parser');  
var storage = multer.diskStorage({  
destination:(req,file,cb)=>{  
cb(null,'./public/uploads');  
},  
filename:(req,file,cb)=>{  
cb(null,file.originalname);  
}  
});  
var uploads = multer({storage:storage});  
//connect to db  
mongoose.connect('mongodb://localhost:27017/exceldemo',{useNewUrlParser:true})  
.then(()=>console.log('connected to db'))  
.catch((err)=>console.log(err))  
//init app  
var app = express();  
//set the template engine  
app.set('view engine','ejs');  
//fetch data from the request  
app.use(bodyParser.urlencoded({extended:false}));  
//static folder  
app.use(express.static(path.resolve(__dirname,'public')));  
//route for Home page
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
// Upload excel file and import to mongodb
app.post('/uploadfile', upload.single("uploadfile"), (req, res) =>{
importExcelData2MongoDB(__dirname + '/uploads/' + req.file.filename);
console.log(res);
});
// Import Excel File to MongoDB database
function importExcelData2MongoDB(filePath){
// -> Read Excel File to Json Data
const excelData = excelToJson({
    sourceFile: filePath,
    sheets:[{
    // Excel Sheet Name
    name: 'Customers',
    // Header Row -> be skipped and will not be present at our result object.
    header:{
    rows: 1
    },
    // Mapping columns to keys
    columnToKey: {
    A: 'name',
    B: 'email',
    C: 'mobile',
    D: 'dateofbirth',
    E: 'Workexperience',
    F: 'Postaladdress',
    G: 'Currentemployee',
    H: 'CurrentDestination',
    }
    }]
    });
    // -> Log Excel Data to Console
    console.log(excelData);
   
    userModel.insertMany(jsonObj,(err,data)=>{  
        if(err){  
        console.log(err);  
        }else{  
        res.redirect('/');  
        }  
        }); 
        fs.unlinkSync(filePath);
        }
        //assign port  
        var port = process.env.PORT || 3000;  
        app.listen(port,()=>console.log('server run at port '+port));