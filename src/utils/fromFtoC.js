export default function fromFtoC (degrees) {
  const c = (degrees - 32) * (5 / 9)
  return Math.round(c)
}
