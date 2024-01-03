
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export function middleware(request: NextRequest) {
  
    const sessionId = request.cookies.get("sessionId")
    const response = NextResponse.next()

    if (!sessionId) {
      response.cookies.set("sessionId", uuidv4() , {
        // Cookie expiration date - one year 
        maxAge: 60 * 60 * 24 * 365,
      });
      return response;
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
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  };