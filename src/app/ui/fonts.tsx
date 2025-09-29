import localFont from "next/font/local";

export const display = localFont({
  variable: "--font-display",
  src: [{ path: "./fonts/display/PPRader-Medium.woff2", weight: "700", style: "normal" }],
});

export const serif = localFont({
  variable: "--font-serif",
  src: [
    { path: "./fonts/serif/PPEditorialOld-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/serif/PPEditorialOld-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "./fonts/serif/PPEditorialOld-Ultralight.woff2", weight: "300", style: "normal" },
    { path: "./fonts/serif/PPEditorialOld-UltralightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/serif/PPEditorialOld-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/serif/PPEditorialOld-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/serif/PPEditorialOld-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/serif/PPEditorialOld-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/serif/PPEditorialOld-Heavy.woff2", weight: "900", style: "normal" },
    { path: "./fonts/serif/PPEditorialOld-HeavyItalic.woff2", weight: "900", style: "italic" },
  ],
});

export const sans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "./fonts/sans/PPNeueMontreal-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sans/PPNeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sans/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
