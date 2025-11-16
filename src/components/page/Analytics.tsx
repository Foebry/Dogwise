// components/Analytics.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const gtagId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    console.log({ gtagId });

    const url = pathname + searchParams.toString();

    window.gtag?.("config", gtagId, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
