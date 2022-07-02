import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers.get("host") || "lens.ink";

  // // Only for demo purposes – remove this if you want to use your root domain as the landing page
  // if (hostname === "lens.ink") {
  //   return NextResponse.redirect("https://lens.ink");
  // }

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.lens.ink`, "")
      : hostname.replace(`.localhost:3000`, "");

  if (!url.pathname.includes(".") && !url.pathname.startsWith("/api")) {
    if (
      hostname === "localhost:3000" ||
      hostname === "lens.ink"
    ) {
    //   url.pathname = `/home${url.pathname}`;
      return NextResponse.rewrite(url);
    }

    url.pathname = `/_sites/${currentHost}${url.pathname}`;
    return NextResponse.rewrite(url);
  }
}

