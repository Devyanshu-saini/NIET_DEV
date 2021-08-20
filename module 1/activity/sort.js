let fs= require("fs");
//const extentions = require("./extention");



// function which give content of a directory 

let contents= fs.readdirSync("testfolder");


//console.log(contents);


for(let i =0;i<contents.length;i++)
{
    let file=contents[i];
    sortfile(file);
}


function sortfile(file){

   let extention = file.split(".")[1];

  let foldername= getfoldername(extention);
 
  //console.log(extention,foldername);
  let testFolderPath = "./testfolder";
  let folderpath=  testFolderPath+"/"+foldername;

  if(!fs.existsSync(folderpath))
  {
      fs.mkdirSync(folderpath);
  }

  let sourcepath= testFolderPath+"/"+file;
  let destinationpath=folderpath+"/"+file;


  fs.copyFileSync( sourcepath  , destinationpath );
  // delete file
 fs.unlinkSync(sourcepath);


 //console.log(sourcepath, destinationpath);

}


function getfoldername(extention){
    for(let key in extentions)
    {
        if(extentions[key].includes(extention))
        {
            return key;
        }
    }
}