import { datesRangeFilter } from './index';

const chartData = [
  {
    date_ms: 1641772800000,
    performance: 0.2,
  },
  {
    date_ms: 1641859200000,
    performance: 0.33,
  },
  {
    date_ms: 1641945600000,
    performance: 0.53,
  },
  {
    date_ms: 1642032000000,
    performance: 0.31,
  },
  {
    date_ms: 1642118400000,
    performance: 0.65,
  },
  {
    date_ms: 1642204800000,
    performance: 0.88,
  },
  {
    date_ms: 1642291200000,
    performance: 0.07,
  },
];

describe('test dates Range Filter', () => {
  it('returns the correct length', () => {
    expect(datesRangeFilter(chartData, '2022-01-10', '2022-01-12').length).toEqual(3);
    expect(datesRangeFilter(chartData, '2022-01-10', '2022-01-16').length).toEqual(7);
    expect(datesRangeFilter(chartData, '2022-01-17', '2022-01-16').length).toEqual(0);
  });
});
