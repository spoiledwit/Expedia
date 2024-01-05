import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { FAB } from "@/components/fab";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Centennial Migration",
  description:
    "Centennial Migration: Your leading visa consultant and immigration agency in Dubai, UAE. Streamlining global relocation with expert guidance.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
  alternates: {
    canonical: `https://www.centennialmigration.com`,
  },
};

const jsonLD = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.centennialmigration.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://www.centennialmigration.com/about-us",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Immigration To Australia",
      item: "https://www.centennialmigration.com/immigration/australia",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Immigration To UK",
      item: "https://www.centennialmigration.com/immigration/uk",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Immigration To Europe",
      item: "https://www.centennialmigration.com/immigration/europe",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Immigration To Canada",
      item: "https://www.centennialmigration.com/immigration/canada",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Immigration To New Zealand",
      item: "https://www.centennialmigration.com/immigration/newzealand",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Contact Us",
      item: "https://www.centennialmigration.com/contact",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Payment",
      item: "https://www.centennialmigration.com/payment",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 

  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5Y9K5KWPXV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5Y9K5KWPXV');
        `}
      </Script>
      <Script>
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1544216096376457');
fbq('track', 'PageView');
`}
      </Script>

      <body className={inter.className}>
        <Toaster />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
        <div className={`w-full fixed top-0 z-50`}>
          <Header />
        </div>
        <div className="relative">
          {children}
          <Footer />
          <FAB />
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
