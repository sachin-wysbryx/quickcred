import { describe, it, expect } from 'vitest';
import { formatCurrency } from '../../packages/utils/src/currency';

describe('formatCurrency', () => {
  it('should format numbers clearly with rupee symbol', () => {
    expect(formatCurrency(100)).toBe('₹100.00');
    expect(formatCurrency(1234.567)).toBe('₹1234.57');
  });

  it('should handle zero correctly', () => {
    expect(formatCurrency(0)).toBe('₹0.00');
  });

  it('should handle negative numbers', () => {
    expect(formatCurrency(-50.5)).toBe('₹-50.50');
  });
});
