const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

import {buildLCDString} from './lcd';
import {EOL} from 'os';

const usage = 'Please give a number to display in LCD format (any non numeric character will be skiped)'

readline.question(usage + EOL, (input) => {
  console.log(buildLCDString(input));
  readline.close();
})
