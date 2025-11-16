"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContentPage from "@/components/page/ContentPage";
import usePageConfig from "@/components/page/usePageConfig";
import AppProvider from "@/context/AppContext";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import Script from "next/script";
import { Suspense, useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import Analytics from "@/components/page/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const { title, meta } = usePageConfig();
  const gtagId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {},
      },
      language: {
        default: "nl",
        translations: {
          nl: {
            consentModal: {
              title: "Wij hanteren cookies",
              description: "Deze site gebruikt cookies. Onze hond wilde er ook een paar, maar helaas zijn ze alleen voor je browser 🍪🐕.",
              acceptAllBtn: "Accepteer alle cookies",
              acceptNecessaryBtn: "Accepteer enkel noodzakelijke cookies",
              showPreferencesBtn: "Beheer individuele voorkeuren",
            },
            preferencesModal: {
              title: "Beheer cookie voorkeuren",
              acceptAllBtn: "Accepteer alle cookies",
              acceptNecessaryBtn: "Accepteer enkel noodzakelijke cookies",
              savePreferencesBtn: "Accepteer mijn de huidige selectie",
              closeIconLabel: "Sluit deze dialoog",
              sections: [
                {
                  title: "Deze website gebruikt cookies",
                  description:
                    "en nee, niet de hondenkoekjes waar je viervoeter op zit te wachten. Wij gebruiken digitale cookies om de site beter te laten werken. Jij krijgt informatie, je hond krijgt… helaas niks.",
                },
                {
                  title: "Uitsluitend noodzakelijke cookies",
                  description: "Deze cookies zijn essentieel voor de goede werking van de website en kunnen niet worden uitgeschakeld.",

                  //this field will generate a toggle linked to the 'necessary' category
                  linkedCategory: "necessary",
                },
                {
                  title: "Prestaties en Analyse",
                  description:
                    "Deze cookies verzamelen informatie over hoe u onze website gebruikt. Alle gegevens worden geanonimiseerd en kunnen niet worden gebruikt om u te identificeren.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Meer informatie",
                  description: 'Voor vragen over ons cookiebeleid en uw keuzes, kunt u <a href="/home#contact">contact met ons opnemen</a>',
                },
              ],
            },
          },
        },
      },
    });
  }, []);
  return (
    <html lang="nl">
      <head>
        <title>{title}</title>
        {meta.map(({ name, content, key }) => (
          <meta key={key} name={name} content={content} />
        ))}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager / gtag.js */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <div className="relative text-black">
          <AppProvider>
            <ContentPage>{children}</ContentPage>
            <Suspense>
              <Analytics />
            </Suspense>
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
