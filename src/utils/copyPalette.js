export async function copyPalette(colors) {
  const text = colors.join(", ");
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
