import { NextResponse, type NextRequest } from "next/server";

// Ensure preview deployments never get indexed, and (once the apex domain is
// live) 308-redirect vercel.app + www subdomains to https://cherryrefrigeration.com.au.
// The primary domain is read from NEXT_PUBLIC_SITE_URL so cutover is a single
// env var change in Vercel.
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const url = new URL(req.url);

  const primary = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const primaryHost = primary ? new URL(primary).host : "";

  // 1. Preview / staging: noindex.
  if (host.endsWith(".vercel.app")) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  // 2. Apex domain redirect: strip www if the primary host is apex.
  if (primaryHost && host !== primaryHost) {
    if (host === `www.${primaryHost}`) {
      url.host = primaryHost;
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match everything except static files.
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|icon-|apple-touch-icon).*)",
  ],
};
