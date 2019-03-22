import {EOL} from 'os';

const LCDNumbers = {
  "0": { first: " _ ", second: "| |", third: "|_|" },
  '1': { first: '   ', second: '  |', third: '  |'},
  '2': { first: ' _ ', second: ' _|', third: '|_ '},
  '3': { first: ' _ ', second: ' _|', third: ' _|'},
  '4': { first: '   ', second: '|_|', third: '  |'},
  '5': { first: ' _ ', second: '|_ ', third: ' _|'},
  '6': { first: ' _ ', second: '|_ ', third: '|_|'},
  '7': { first: ' _ ', second: '  |', third: '  |'},
  '8': { first: ' _ ', second: '|_|', third: '|_|'},
  '9': { first: ' _ ', second: '|_|', third: '  |'}
};

/**
 * Removes non numeric characters from characters list.
 *
 * @param charList - The initial characters list
 * @returns the charlist as string array purged from non numeric characters
 */
function sanitize(charList: string): Array<string> {
  return charList
    .split('')
    .filter(character => LCDNumbers[character]);
}

/**
 * Extracts a line of the LCD format from a character list.
 *
 * @param charList - The input characters list
 * @param property - the property to extract from character list
 * @returns a single line built from the given character list for the
 * property given into parameter.
 */
function extractLine(charList: Array<string>, property: string): string {
  return charList
    .map(character => LCDNumbers[character][property])
    .join(' ');
}

/**
 * Builds a LCD formated string
 *
 * @param input - The classic string to format to LCD display
 * @returns A LCD formated string
 */
export function buildLCDString(input: string = ''): string {
  const sanitizedList = sanitize(input);

  // Half functionnal style :)
  // Actually, with currification we could have chained the call of sanitize
  // with other function calls, but function currification is ugly in JS
  // and produces uncommon code. So let's not do it !
  return EOL + ["first", "second", "third"]
    .map(prop => extractLine(sanitizedList, prop))
    .join(EOL);
}

export default buildLCDString;
