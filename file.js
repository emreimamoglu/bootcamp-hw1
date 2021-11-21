const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Yarıcap : ", function saveInput(r) {
  console.log(`Alan ${3.14 * r * r}`);
  rl.close();
});