import Sample from '../src/Sample';

const mocha = require('mocha');
const expect = require('chai').expect;
const fs = require('fs');

describe("Sample class", ()=>{

  describe("constructor", ()=>{
    let sample;
    let samplePath = './data/sample/valid/1_whitenoise.wav';
    it("can instanciate from a path", () => {
      sample = new Sample(samplePath);
      expect(sample).to.be.an.instanceOf(Sample);
    });

  });
});
