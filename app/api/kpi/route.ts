import { NextRequest, NextResponse } from 'next/server';
import { readCustomers } from '../_lib/customer-store';

export async function GET(req: NextRequest) {
  const cid = req.nextUrl.searchParams.get('cid');
  if (!cid) return NextResponse.json({ error: 'cid is required' }, { status: 400 });

  try {
    const customers = await readCustomers();
    const customer = customers.find(
      (c) => c.customer_id === cid || String(c.id) === cid,
    );

    if (!customer) {
      return NextResponse.json({
        service: 'pal_studio',
        serviceName: 'Pal Studio',
        paletteId: cid,
        kpi: { siteStatus: '未作成', totalPages: 0, blogPosts: 0 },
        health: 'red' as const,
        lastActivity: null,
      });
    }

    const payload = typeof customer.payload === 'object' && customer.payload ? customer.payload as Record<string, unknown> : {};
    const pages = Array.isArray(payload.pages) ? payload.pages : [];
    const posts = Array.isArray(payload.posts) ? payload.posts : [];
    const blogPosts = posts.filter((p: Record<string, unknown>) => p.postType === 'blog' || p.post_type === 'blog').length;
    const newsPosts = posts.filter((p: Record<string, unknown>) => p.postType === 'news' || p.post_type === 'news').length;

    const lastUpdated = customer.updated_at || null;
    const daysSinceUpdate = lastUpdated ? Math.floor((Date.now() - new Date(lastUpdated).getTime()) / 86400000) : 999;

    let health: 'green' | 'yellow' | 'red' = 'green';
    if (daysSinceUpdate > 30) health = 'red';
    else if (daysSinceUpdate > 14) health = 'yellow';

    return NextResponse.json({
      service: 'pal_studio',
      serviceName: 'Pal Studio',
      paletteId: cid,
      kpi: {
        siteStatus: customer.status || 'unknown',
        totalPages: pages.length + 1,
        blogPosts: blogPosts,
        newsPosts: newsPosts,
        lastUpdated: lastUpdated ? new Date(lastUpdated).toISOString().split('T')[0] : null,
      },
      health,
      lastActivity: lastUpdated,
    });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
