import { readFileSync } from "fs";

export function dayTwo() {
    const input = readFileSync("./src/day-two/input.txt", "utf8");

//   const input = `7 6 4 2 1
// 1 2 7 8 9
// 9 7 6 2 1
// 1 3 2 4 5
// 8 6 4 4 1
// 1 3 6 7 9`;

  const lines = input.split("\n");

  let totalSecurity = 0;

  lines.forEach((line) => {
    if (verifySecurity(line)) {
        totalSecurity++;
    }
  });

  console.log(totalSecurity);
}

function verifySecurity(line: string) {
  let numbers = line.split(" ").map((e) => parseInt(e));

  if (numbers[0] > numbers[1]) {
    numbers = numbers.reverse();
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) {
      return true;
    }

    if (numbers[i] > numbers[i + 1]) {
      return doubleCheck(line);
    }

    if ((numbers[i + 1] - numbers[i]) < 1 || (numbers[i + 1] - numbers[i]) > 3) {
      return doubleCheck(line);
    }
  }

  return true;
}

function doubleCheck(line: string) {
  const numbers = line.split(" ");

  for (let i = 0; i < numbers.length; i++) {
    const copy = [...numbers];
    copy.splice(i, 1);

    if (verifySecurityTwo(copy.join(" "))) {
      return true;
    }
  }

  return false;
}


function verifySecurityTwo(line: string) {
  let numbers = line.split(" ").map((e) => parseInt(e));

  if (numbers[0] > numbers[1]) {
    numbers = numbers.reverse();
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) {
      return true;
    }

    if (numbers[i] > numbers[i + 1]) {
      return false;
    }

    if ((numbers[i + 1] - numbers[i]) < 1 || (numbers[i + 1] - numbers[i]) > 3) {
      return false;
    }
  }

  return true;
}
