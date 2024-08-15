export function Helvetica({
  subsets = ["latin"],
  weights = ["100", "300", "700"],
  variable,
}) {
  const weightsString = weights.join(";");
  const subsetsString = subsets.join(";");

  return {
    style: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: weightsString,
      fontVariationSettings: variable
        ? `--font-variable: ${variable}`
        : undefined,
    },
  };
}
