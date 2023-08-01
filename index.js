var excelStorage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
         cb(null,'./public/excelUploads');      // file added to the public folder of the root directory
    },  
    filename:(req,file,cb)=>{  
         cb(null,file.originalname);  
    }  
});  
var excelUploads = multer({storage:excelStorage}); 
app.get('/',(req,res) => {
       res.render('index.ejs');
})
// upload excel file and import in mongodb
app.post('/uploadExcelFile', excelUploads.single("uploadfile"), (req, res) =>{  
       importFile('./public' + '/excelUploads/' + req.file.filename);
            function importFile(filePath){
              //  Read Excel File to Json Data
                var arrayToInsert = [];
                csvtojson().fromFile(filePath).then(source => {
              // Fetching the all data from each row
                for (var i = 0; i < source.length; i++) {
                    console.log(source[i]["name"])
                    var singleRow = {
                        name: source[i]["name"],
                        email: source[i]["email"],
                        standard: source[i]["standard"],
                    };
                    arrayToInsert.push(singleRow);
                }
             //inserting into the table student
             Student.insertMany(arrayToInsert, (err, result) => {
                    if (err) console.log(err);
                        if(result){
                            console.log("File imported successfully.");
                            res.redirect('/')
                        }
                    });
                });
           }
})