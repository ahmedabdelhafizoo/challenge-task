export function datesRangeFilter(data, startDate, endDate) {
  return data.filter(
    (item) => item.date_ms >= new Date(startDate).getTime() &&
      item.date_ms <= new Date(endDate).getTime()
  );
}
