import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Inter-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
