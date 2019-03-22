import {EOL} from 'os';
import {buildLCDString} from '../src/lcd';
import {expect} from 'chai';

describe('buildLCDString', () => {
  describe('with pure numerical string \"0123456789\"', () => {
    it('should return LCD like numerical string 0123456789', () => {
      const expected = `
 _       _   _       _   _   _   _   _ 
| |   |  _|  _| |_| |_  |_    | |_| |_|
|_|   | |_   _|   |  _| |_|   | |_|   |`;

      expect(buildLCDString('0123456789')).to.equal(expected);
    });
  });

  describe('with mixed string \"er1i$%^234yRf56789\"', () => {
    it('should sanitize string and return LCD version of 0123456789', () => {
      const expected = `
 _       _   _       _   _   _   _   _ 
| |   |  _|  _| |_| |_  |_    | |_| |_|
|_|   | |_   _|   |  _| |_|   | |_|   |`;

      expect(buildLCDString('0er1i$%^234yRf56789')).to.equal(expected);
    });
  });

  describe('with empty string \"\"', () => {
    it('should return empty lines', () => {
      const expected = EOL + EOL + EOL ;
      expect(buildLCDString('')).to.equal(expected);
    });
  });
});
