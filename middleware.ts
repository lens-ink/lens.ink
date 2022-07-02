import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const hostname = req.headers.get("host") || "lens.ink";

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.lens.ink`, "")
      : hostname.replace(`.localhost:3000`, "");

  if (!url.pathname.includes(".") && !url.pathname.startsWith("/api")) {
    if (
      hostname === "localhost:3000" ||
      hostname === "lens.ink" ||
      hostname === "www.lens.ink"
    ) {
      console.log(url)
    //   url.pathname = `/home${url.pathname}`;
      return NextResponse.rewrite(url);
    }

    url.pathname = `/_sites/${currentHost}${url.pathname}`;
    return NextResponse.rewrite(url);
  }
}

