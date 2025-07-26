const URL = process.env.NEXT_PUBLIC_APP_URL || '';
const lastMod = new Date().toISOString();

function generateSiteMap(): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${URL}</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/service-list</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/service-detail</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/blog-list</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/blog-detail</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/portfolio-list</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/portfolio-detail</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/career</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/contact-us</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/faq</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/terms-condition</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    <url>
        <loc>${URL}/privacy-policy</loc>
        <lastmod>${lastMod}</lastmod>
    </url>
    </urlset>`;
}

export function GET(): Response {
    const body = generateSiteMap();

    return new Response(body, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
        },
    });
}
