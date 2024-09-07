import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  Add(numbers: string): any {
    if (numbers === '') {
      return 0;
    }
  }
}
