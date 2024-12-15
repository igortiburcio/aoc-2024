import { readFileSync } from "fs";

export function dayOne() {
  const input = readFileSync("./src/day-one/input.txt", "utf8");

  const lines = input.split("\n");
  const pairs = lines.map((e) => e.split(" "));

  const leftList: string[] = [];
  const rightList: string[] = [];

  pairs.forEach(([left, right]) => {
    leftList.push(left);
    rightList.push(right);
  });

  let total = 0;
  let total2 = 0;

  leftList.sort((a, b) => parseInt(a) - parseInt(b));
  rightList.sort((a, b) => parseInt(a) - parseInt(b));

  for (let i = 0; i < leftList.length; i++) {
    total += Math.abs(parseInt(leftList[i]) - parseInt(rightList[i]));
  }

  for (let i = 0; i < leftList.length; i++) {
    const value = leftList[i];

    const numberOfAppearances = rightList.filter((e) => e === value).length;

    total2 += Number(value) * numberOfAppearances;
  }

  console.log(total);
  console.log(total2);
}
