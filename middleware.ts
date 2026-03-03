import { NextRequest, NextResponse } from 'next/server';
import { isExpired, parseSessionValue, SESSION_COOKIE_NAME } from './lib/auth-session';

const redirectToLogin = (req: NextRequest) => {
  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = '/login';
  loginUrl.searchParams.set('next', `${req.nextUrl.pathname}${req.nextUrl.search}`);
  return NextResponse.redirect(loginUrl);
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const cookieValue = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = parseSessionValue(cookieValue);

  if (!session || isExpired(session)) {
    const res = redirectToLogin(req);
    res.cookies.set({ name: SESSION_COOKIE_NAME, value: '', path: '/', maxAge: 0 });
    return res;
  }

  if (pathname.startsWith('/admin')) {
    if (session.role !== 'admin') {
      return redirectToLogin(req);
    }
    return NextResponse.next();
  }

  if (pathname.startsWith('/main')) {
    if (session.role === 'admin') {
      return NextResponse.next();
    }

    const cid = req.nextUrl.searchParams.get('cid')?.trim();
    const myCid = session.customerId?.trim();
    if (!myCid) return redirectToLogin(req);

    if (!cid) {
      const url = req.nextUrl.clone();
      url.searchParams.set('cid', myCid);
      return NextResponse.redirect(url);
    }

    if (cid !== myCid) {
      const url = req.nextUrl.clone();
      url.searchParams.set('cid', myCid);
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/main', '/main/:path*'],
};
