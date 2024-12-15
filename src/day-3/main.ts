import * as fs from 'fs';

export function dayThree() {
    const regex = /(mul\(\d+,\d+\)|do\(\)|don\'t\(\))/g;
    const input = fs.readFileSync('src/day-3/input.txt', 'utf8');
    
    const matches = input.match(regex);

    let total = 0;

    console.log(matches?.length);
    console.log(matches);

    for (let i = 0; i < matches!.length; i++) {
        if (matches![i] === 'don\'t()') {
            const array = matches!.slice(i);
            const nextDoIndex = array.indexOf('do()');
            nextDoIndex !== -1 ? matches!.splice(i, nextDoIndex) : matches!.splice(i, matches!.length);
        }
    }

    console.log(matches?.length);

    const newMatches = matches!.filter(e => e !== 'do()' && e !== 'don\'t()');

    console.log(newMatches?.length);

    console.log(newMatches);

    for (const match of newMatches!) {
        const [a, b] = match.replace('mul(', '').replace(')', '').split(',').map(Number);
        total += mul(a, b);
    }

    console.log(total);
}

function mul(a: number, b: number) {
    return a * b;
}