const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let result = '';
        for(let j = 0; j < expr.length; j += 10) {
          let substr = expr.substr(j, 10);
          let line = '';
          for(let i = 0; i < substr.length; i += 2) {
            if(substr == '**********') {
              line += ' ';
              i += 10;
            }else if(substr.slice(i,i + 2) == 00) {
              line += '';
            }else if(substr.slice(i,i + 2) == 10) {
              line += '.';
            }else {
              line += '-';
            }
          }
          result += MORSE_TABLE[line];    
        }
        return result;
}

module.exports = {
    decode
}
