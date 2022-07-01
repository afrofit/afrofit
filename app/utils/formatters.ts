export const CALORIE_MULTPLIER = 0.00175;

export const DANCE_TIME_MULTIPLIER = 2.25;

export const formattedStat = (unit: number, int: boolean = false): string => {
  if (unit === 0) return `${unit}`;
  if (unit < 0 || unit > 999999) return "";
  if (unit > 99990 && unit < 999999)
    return `${unit.toString()[0]}${unit.toString()[1]}${unit.toString()[2]}k`;
  if (unit > 9999 && unit < 99999)
    return `${unit.toString()[0]}${unit.toString()[1]}.${unit.toString()[2]}k`;
  if (unit > 999 && unit < 9999)
    return `${unit.toString()[0]}.${unit.toString()[1]}k`;
  if (unit < 999) {
    if (!int) {
      return `${unit.toFixed(1)}`;
    } else if (int) {
      return `${Math.floor(unit)}`;
    }
  }
  return "";
};

export const calculateDanceTimeFromBodyMovements = (bodyMoves: number) => {
  const danceTime = bodyMoves * DANCE_TIME_MULTIPLIER;
  return formattedStat(danceTime);
};

export const calculateCaloriesFromBodyMovements = (bodyMoves: number) => {
  const calories = bodyMoves * CALORIE_MULTPLIER;
  return formattedStat(calories);
};
