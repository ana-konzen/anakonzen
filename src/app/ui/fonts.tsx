import localFont from "next/font/local";

export const mono = localFont({
  variable: "--font-fraktion-mono",
  src: [
    {
      path: "./fonts/mono/PPFraktionMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/mono/PPFraktionMono-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/mono/PPFraktionMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/mono/PPFraktionMono-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/mono/PPFraktionMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/mono/PPFraktionMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const sans = localFont({
  variable: "--font-fraktion-sans",
  src: [
    {
      path: "./fonts/sans/PPFraktionSans-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sans/PPFraktionSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sans/PPFraktionSans-Thin.otf",
      weight: "200",
    },
  ],
});
