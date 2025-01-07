export const RoundNumber = (number: number, roundTo: number): number => {
  return Math.round(number * 10 ** roundTo) / 10 ** roundTo
}
