// Class for representing an audio Sample in memory
//
const supportedSampleFormats = ['.mp3', '.wav'];


class InvalidSampleFileException extends Error{
  constructor(filename){
    super(`${filename} is of unsupported file type, supported sample formats are ${supportedSampleFormats}`)
  }
}


class Sample {

  static supportedSampleFormats = ['.mp3', '.wav'];

  /**
   * isValidSample - verify a file is a supported sample format
   *
   * @param  {string} filename string file path including extension
   * @return {boolean}         boolean indication
   */
  static isValidSample(filePath){
    return this.supportedSampleFormats.includes(path.extname(filePath));
  }

  constructor(properties){
    const {filePath} = properties;

    // validate
    if(!this.isValidSample(filePath)){
      throw new InvalidSampleFileException(filename);
    }

    // load file
    this.filePath = filePath;

  }

  load(){
    return fs.readFile(filePath, (err, data){
      if(err) throw err;
      this.audioData = data;
    });
  }



}

export default Sample;
