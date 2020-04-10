import {AKPIO} from '../src/AKPIO';
import {Sample} from '../src/Sample';
//
const mocha = require('mocha');
const expect = require('chai').expect;
const fs = require('fs');
const appRoot = require('app-root-path');
const path = require('path');

const testSamplesPath = path.join(__dirname, 'samples', 'valid');

describe("AKPIO class", ()=>{

  let files;

  describe("readDir(<test_path>)", ()=> {
    AKPIO.readDir(testSamplesPath).then(filePaths => {

      let allAreFiles = filePaths.map((path) =>{
        return fs.lstatSync(fullPath).isFile();
      });

      it("returns an array of valid file paths", () =>{
        expect(allAreFiles).to.be.true;
      });

      it("loaded all test files from dir provided", () => {
        fs.readDir(testSamplesPath, (testFiles) => {
          files = testFiles;
          expect(filePaths.length).to.equal(testFiles.length);
        });
      });


    });

  describe("loadSample(<test_sample>)", ()=> {
    let samples = files.map( file => {
      return AKPIO.loadSample(file);
    });
    expect(samples[0]).to.be.instanceOf(Sample);
  });



  });
  //
  // describe("when readDir is called", () => {
  //   const samplesPath = appRoot + '/test/data/samples/valid';
  //   describe("and provided a single path", () => {
  //     let loadedSamples = AKPIO.loadSamples(samplesPath);
  //     let expectedNumLoaded = fs.readdirSync(samplesPath).length;
  //     it("returns an array of Samples that", () => {
  //       expect(loadedSamples[0]).to.be.an.instanceOf(Sample);
  //       it("is of the right length", () => {
  //         expect(loadedSamples.length).to.equal(expectedNumLoaded);
  //       });
  //     });
  //   });
  // });

  // describe("when isValidSample is called", ()=>{
  //   it("accepts the correct file formats", () => {
  //     expect(AKPIO.isValidSample('./data/samples/1_whitenoise.wav')).to.be.true;
  //   });
  //   it("rejects incorrect file formats", () => {
  //     expect(AKPIO.isValidSample('./data/samples/1_invalid.svg')).to.be.false;
  //   });
  // });

});


/* describe('AKPIO loadFolder', function(){
  it('should load all audio files when provided a path', function(){
    files = AKPIO.loadFiles("./data/test");
    expect(files.length).to.equal()
  });
});

*/
