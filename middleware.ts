import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  detectPreferredLocale,
  isAppLocale,
  LOCALE_PREFERENCE_COOKIE,
} from "@/lib/locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_PREFERENCE_COOKIE)?.value;

  if (isAppLocale(cookieLocale)) {
    if (cookieLocale === "en") {
      const url = request.nextUrl.clone();
      url.pathname = "/en";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  const preferredLocale = detectPreferredLocale(
    request.headers.get("accept-language"),
  );

  if (preferredLocale === "en") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
