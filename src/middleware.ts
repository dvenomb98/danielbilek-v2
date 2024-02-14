import { NextRequest, NextResponse } from "next/server";
import { PROTECTED_URLS, URLS } from "./lib/consts/urls";
import { createClient } from "./lib/services/supabase/client/middleware-client";

export async function middleware(request: NextRequest) {
  const { response, supabase } = createClient(request);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session && request.nextUrl.pathname.startsWith(PROTECTED_URLS.LOGIN)) {
    return NextResponse.redirect(new URL(PROTECTED_URLS.DASHBOARD, request.url));
  }

  if (!session && request.nextUrl.pathname.startsWith(PROTECTED_URLS.DASHBOARD)) {
    return NextResponse.redirect(new URL(PROTECTED_URLS.LOGIN, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
