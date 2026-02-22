import Footer from "@/app/_components/_layout/Footer";
import Navbar from "@/app/_components/_layout/Navbar";
import { inter } from "@/app/_lib/action";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import type { Viewport } from "next";
import "./styles/globals.css";

type LayoutProps = {
  children: ReactNode;
};

// export const metadata: Metadata = {
//   title: {
//     default: "Mohayman Rayed Hamed",
//     template: "%s | Mohayman Rayed Hamed",
//   },
//   description:
//     "Front-End Developer specializing in modern, high-performance web applications...",
//   keywords: [
//     "Front-End Developer",
//     "React Developer",
//     "Next.js Portfolio",
//     "UI/UX Design",
//   ], // Add this!
//   authors: [{ name: "Mohayman Rayed Hamed" }],
//   creator: "Mohayman Rayed Hamed",
// };

export const metadata: Metadata = {
  title: "Mohyaman Rayed",
  description:
    "Front-end developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
  keywords: [
    "Mohayman Rayed",
    "Front End Developer",
    "React Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Framer Motion",
    "Tailwind CSS",
    "Next.js",
    "JavaScript",
    "UI/UX",
    "Web Applications",
    "مهيمن رائد",
    "المبرمج",
    "تطوير الويب",
    "تطبيقات الويب",
    "مطور واجهات المستخدم",
    "تصميم واجهات المستخدم",
    "مهيمن رائد العزاوي",
  ],
  authors: [{ name: "Mohayman Rayed" }],
  creator: "Mohayman Rayed",
  publisher: "Mohayman Rayed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    other: {
      rel: "icon",
      url: "/icon.svg",
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://mohayman-rayed-portfolio.vercel.app/",
    languages: {
      "en-US": "https://mohayman-rayed-portfolio.vercel.app/",
    },
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohayman-rayed-portfolio.vercel.app/",
    title: "Mohayman Rayed",
    description:
      "Front-end developer specializing in Next.js, React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
    siteName: "Mohayman Rayed Portfolio",
    images: [
      {
        url: "https://mohayman-rayed-portfolio.vercel.app/myself.png",
        width: 1200,
        height: 630,
        alt: "Mohayman Rayed - Front End Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohayman Rayed",
    description:
      "Front-end developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio of interactive web applications and projects.",
    images: ["https://mohayman-rayed-portfolio.vercel.app/myself.png"],
  },
  other: {
    "msapplication-TileColor": "#00bcd4",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[var(--backgroundColor)] font-inter text-[var(--fontColor)]">
        {/* Elegant Toast Configuration */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "var(--backgroundColor)",
              color: "var(--fontColor)",
              border: "1px solid rgba(var(--fontColor2-rgb), 0.15)",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "12px 20px",
            },
          }}
        />
        <Navbar />
        <main className="w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // JSON-LD Structured Data for SEO
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Person",
//     name: "Muntadher Ahmed",
//     jobTitle: "Front End Developer",
//     url: "https://muntadher-ahmed.vercel.app/",
//     image: "https://muntadher-ahmed.vercel.app/myImg.png",
//     sameAs: [
//       "https://github.com/Eng-Muntadher",
//       "https://www.linkedin.com/in/muntadher-ahmed-4577b6333",
//       "https://youtube.com/@montadherahmed340?si=SybgxoJNMJfN0STR",
//     ],
//     knowsAbout: [
//       "React",
//       "TypeScript",
//       "Next.js",
//       "Framer Motion",
//       "Tailwind CSS",
//       "JavaScript",
//       "Web Development",
//       "Front-end Development",
//       "UI/UX Design",
//     ],
//     description:
//       "Front-end developer specializing in React, Next.js, TypeScript, and modern web technologies.",
//     alumniOf: {
//       "@type": "Organization",
//       name: "University of Baghdad, Iraq",
//     },
//     address: {
//       "@type": "PostalAddress",
//       addressLocality: "Al Diwaniyah",
//       addressRegion: "Al-Qadisiyah",
//       addressCountry: "IQ",
//     },
//   };

//   // WebSite Schema for search
//   const websiteJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     name: "Muntadher Ahmed Portfolio",
//     url: "https://muntadher-ahmed.vercel.app/",
//     description:
//       "Front-end developer portfolio showcasing React and TypeScript projects",
//     author: {
//       "@type": "Person",
//       name: "Muntadher Ahmed",
//     },
//     inLanguage: "en-US",
//   };

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         {/* Theme Script - Prevents flash of unstyled content */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               try {
//                 const theme = localStorage.getItem('theme') ||
//                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
//                 document.documentElement.classList.toggle('dark', theme === 'dark');
//               } catch {}
//             `,
//           }}
//         />

//         {/* JSON-LD Structured Data - Person Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />

//         {/* JSON-LD Structured Data - WebSite Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
//         />
//       </head>
//       <body>
//         <NavBar />
//         <main className="mt-12 px-20 max-xl:px-8 max-md:px-6">{children}</main>
//         <Footer />

//         <Toaster
//           position="top-center"
//           reverseOrder={false}
//           gutter={8}
//           toastOptions={{
//             // Default options for all toasts
//             duration: 4000,
//             style: {
//               background: "#fff",
//               color: "#363636",
//               padding: "16px 20px",
//               borderRadius: "12px",
//               fontSize: "15px",
//               fontWeight: "500",
//               boxShadow:
//                 "0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)",
//               maxWidth: "420px",
//               border: "1px solid rgba(0, 0, 0, 0.05)",
//             },

//             // Success toast styles
//             success: {
//               duration: 4000,
//               style: {
//                 background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
//                 color: "#ffffff",
//                 padding: "18px 24px",
//                 borderRadius: "12px",
//                 fontSize: "15px",
//                 fontWeight: "500",
//                 boxShadow:
//                   "0 10px 25px rgba(16, 185, 129, 0.3), 0 4px 10px rgba(16, 185, 129, 0.2)",
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//               },
//               iconTheme: {
//                 primary: "#ffffff",
//                 secondary: "#10b981",
//               },
//             },

//             // Error toast styles
//             error: {
//               duration: 5000,
//               style: {
//                 background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
//                 color: "#ffffff",
//                 padding: "18px 24px",
//                 borderRadius: "12px",
//                 fontSize: "15px",
//                 fontWeight: "500",
//                 boxShadow:
//                   "0 10px 25px rgba(239, 68, 68, 0.3), 0 4px 10px rgba(239, 68, 68, 0.2)",
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//               },
//               iconTheme: {
//                 primary: "#ffffff",
//                 secondary: "#ef4444",
//               },
//             },
//           }}
//         />
//       </body>
//     </html>
//   );
// }
