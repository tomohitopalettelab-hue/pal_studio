import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    const apiKey = process.env.UNSPLASH_ACCESS_KEY;

    // Unsplash APIキーがある場合は本番検索
    if (apiKey) {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&orientation=landscape`,
        {
          headers: {
            Authorization: `Client-ID ${apiKey}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Unsplash API Error: ${response.status}`);
      }

      const data = await response.json();
      const images = data.results.map((img: any) => ({
        id: img.id,
        url: img.urls.regular,
        thumb: img.urls.small,
        alt: img.alt_description || 'Unsplash Image',
        photographer: img.user.name
      }));

      return NextResponse.json({ images });
    }

    // APIキーがない場合はモックデータ（Lorem Flickr）を返す
    // 実際の検索に近い画像をランダムに生成
    const mockImages = Array.from({ length: 8 }).map((_, i) => ({
      id: `mock-${i}`,
      url: `https://loremflickr.com/800/600/${encodeURIComponent(query)}?lock=${i}`,
      thumb: `https://loremflickr.com/400/300/${encodeURIComponent(query)}?lock=${i}`,
      alt: `${query} image (Mock)`,
      photographer: 'Demo User'
    }));

    return NextResponse.json({ images: mockImages, isMock: true });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}