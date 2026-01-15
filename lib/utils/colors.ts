/**
 * Converts a hex color string to an RGBA color string with the specified opacity.
 * @param hex - The hex color string (e.g., "#ffffff" or "#fff")
 * @param opacity - The opacity value (0 to 1)
 * @returns The RGBA color string
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  let r = 0,
    g = 0,
    b = 0;

  // Remove the hash if present
  hex = hex.replace('#', '');

  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
