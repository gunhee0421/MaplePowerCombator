export default function PowerShow(combatpower: string) {
  const power = parseInt(combatpower);

  const a = power % 10000;
  const b = ((power % 100000000) - a) / 10000;
  const c = Math.trunc(power / 100000000);

  let showText = "";

  if (c > 0) {
    showText += c + "억 ";
    showText += b + "만 ";
    showText += a;
  } else {
    if (b > 1) {
      showText += b + "만 ";
      showText += a;
    } else {
      showText += a;
    }
  }
  return showText;
}
