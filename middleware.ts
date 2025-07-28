import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // لو مفيش توكن → رجعه لصفحة تسجيل الدخول
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // ✅ يمكنك لاحقًا فك التوكن والتحقق من الدور:
  // const payload = JSON.parse(atob(token.split(".")[1]));
  // if (request.nextUrl.pathname.startsWith("/admin") && payload.role !== "admin") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return NextResponse.next();
}

// ✅ حدد الصفحات التي تريد حمايتها
export const config = {
  matcher: ["/admin/:path*", "/profile", "/checkout"],
};
