// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let input = process.argv.slice(2);

let length = input.length;
for (let i = 0; i < length; i++) {
  let stringToNumber = Number(input[i]);
  if (stringToNumber) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, stringToNumber * 1000);
  }
}