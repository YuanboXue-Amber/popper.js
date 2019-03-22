/**
 * Helper to detect the nearest non-blurry value based on the
 * device pixel ratio
 * @param {Number} n
 * @param {Number} devicePixelRatio
 * @returns {Number}
 */
export default function frac(n, devicePixelRatio) {
  if (devicePixelRatio > 1) {
    return Math.round(n * devicePixelRatio) / devicePixelRatio
  }
  return n
}
