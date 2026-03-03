import { NextRequest, NextResponse } from 'next/server';

const unauthorized = () =>
  new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Palette Admin"',
      'Cache-Control': 'no-store',
    },
  });

export function middleware(req: NextRequest) {
  const username = process.env.ADMIN_USERNAME?.trim() || process.env.ADMIN_USER?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();

  if (!username || !password) {
    return new NextResponse('Admin auth is not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD.', {
      status: 500,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Basic ')) {
    return unauthorized();
  }

  const encoded = authHeader.slice(6).trim();
  let decoded = '';
  try {
    decoded = Buffer.from(encoded, 'base64').toString('utf-8');
  } catch {
    return unauthorized();
  }

  const separatorIndex = decoded.indexOf(':');
  if (separatorIndex < 0) {
    return unauthorized();
  }

  const user = decoded.slice(0, separatorIndex);
  const pass = decoded.slice(separatorIndex + 1);

  if (user !== username || pass !== password) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
