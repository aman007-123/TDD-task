import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(service.Add('')).toEqual(0);
  });

  it('should return the number itself for a single number string', () => {
    expect(service.Add('1')).toEqual(1);
  });

  it('should return the sum of two numbers', () => {
    expect(service.Add('1,2')).toEqual(3);
  });

  it('should handle an unknown amount of numbers', () => {
    expect(service.Add('1,2,3,4,5')).toEqual(15);
  });

  it('should handle new lines between numbers', () => {
    expect(service.Add('1\n2,3')).toEqual(6);
  });

  it('should support different delimiters', () => {
    expect(service.Add('//;\n1;2')).toEqual(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => service.Add('1,-2,3,-4')).toThrowError(
      'Negatives not allowed: -2, -4'
    );
  });
});
