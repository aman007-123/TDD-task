import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  Add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterLineEnd = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterLineEnd);
      numbers = numbers.substring(delimiterLineEnd + 1);
    }

    const regex = new RegExp('[\\n' + delimiter + ']');
    const nums = numbers.split(regex);

    let sum = 0;
    const negatives: any = [];

    nums.forEach((numStr) => {
      const num = parseInt(numStr);
      if (num < 0) {
        negatives.push(num);
      } else if (num <= 1000) {
        // ignore numbers greater than 1000
        sum += num;
      }
    });

    if (negatives.length > 0) {
      throw new Error('Negatives not allowed: ' + negatives.join(', '));
    }
    return sum;
  }
}
