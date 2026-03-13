import { describe, it, expect } from 'vitest';
import { applyCustomPayment } from '../../packages/utils/src/loan/applyCustomPayment';

describe('applyCustomPayment', () => {
  const pendingRepayments = [
    { id: '1', amount: 1000, paidAmount: 0, weekNumber: 1 },
    { id: '2', amount: 1000, paidAmount: 0, weekNumber: 2 },
    { id: '3', amount: 1000, paidAmount: 0, weekNumber: 3 },
  ];

  it('should fully pay the first installment if payment matches amount', () => {
    const updates = applyCustomPayment(pendingRepayments, 1000);
    expect(updates).toHaveLength(1);
    expect(updates[0]).toMatchObject({
      id: '1',
      paidAmount: 1000,
      paid: true
    });
  });

  it('should split payment across multiple installments', () => {
    const updates = applyCustomPayment(pendingRepayments, 1500);
    expect(updates).toHaveLength(2);
    
    // First one fully paid
    expect(updates[0]).toMatchObject({
      id: '1',
      paidAmount: 1000,
      paid: true
    });
    
    // Second one partially paid
    expect(updates[1]).toMatchObject({
      id: '2',
      paidAmount: 500,
      paid: false
    });
  });

  it('should handle overpayment covering all installments', () => {
    const updates = applyCustomPayment(pendingRepayments, 5000);
    expect(updates).toHaveLength(3);
    expect(updates.every(u => u.paid)).toBe(true);
    expect(updates[0].paidAmount).toBe(1000);
    expect(updates[1].paidAmount).toBe(1000);
    expect(updates[2].paidAmount).toBe(1000);
  });

  it('should handle zero payment', () => {
    const updates = applyCustomPayment(pendingRepayments, 0);
    expect(updates).toHaveLength(0);
  });
});
