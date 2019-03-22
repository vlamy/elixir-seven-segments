#!/usr/bin/env node

import {buildLCDString} from './lcd';

if (process.argv[2]) {
  console.log(buildLCDString(process.argv[2]));
} else {
  console.log("Please provide some numerical characters as CLi argument");
}
