const units = [
  {
    unit: 'h',
    length: 1,
    magnitude: 60,
    allowZero: false,
  },
  {
    unit: 'm',
    length: 2,
    magnitude: 1,
    allowZero: true,
  },
];

// Returns time passed in minutes to Xm XXs
// Ex: Input: 110, Output: 1h 50m
export function toCountdown(duration) {
  const list = [];
  let remaining = parseInt(duration, 10);
  units.forEach(({ magnitude, length, allowZero, unit }) => {
    const value = parseInt(remaining / magnitude, 10);
    remaining %= magnitude;
    if (list.length > 0 || allowZero || value > 0) {
      list.push(String(value).padStart(length, '0') + unit);
    }
  });

  return list.join(' ');
}
