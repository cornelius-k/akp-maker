// Perform File System operations and other IO for AKP Files
// class implements static methods only
import Sample from './Sample';
const path = require('path');
const fs = require('fs');

class AKPIO {


  loadSample(filePath){
    let sample = new Sample(filePath);
    return sample.load();
  }


  static async readDir(path){

    try {
      let filenames = await fs.promises.readdir(path);
      let files = await Promise.all(filenames.map(async filename => {
        let fullPath = path.join(dir, filename);

        try{
          let stats = fs.promises.lstat(fullPath);
          if(stats.isFile()){
            return fullPath;
          }else if (stats.isFolder()){
            console.log("This is a folder");
          }
        }
        catch (err){
          console.error(`Error occured lstatting file ${fullPath}`, err);
        }
      }));

      // async map completed
      return files;

    }catch (err){
      console.error(`Error occured while reading directory! ${fullPath}`, err);
    }


}

export default AKPIO;
