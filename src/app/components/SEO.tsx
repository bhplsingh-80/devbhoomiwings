import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title,
  description,
  keywords,
  image = '/devbhoomi.png',
  url = 'https://devbhoomiwings.com',
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `Devbhoomi Wings - Travel with Trust`;
    
    // Update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOGMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMeta('googlebot', 'index, follow');
    updateMeta('revisit-after', '7 days');

    // Open Graph tags
    updateOGMeta('og:title', title);
    updateOGMeta('og:description', description);
    updateOGMeta('og:image', image);
    updateOGMeta('og:url', url);
    updateOGMeta('og:type', type);
    updateOGMeta('og:site_name', 'Devbhoomi Wings');

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Language
    document.documentElement.lang = 'en';

  }, [title, description, keywords, image, url, type]);

  return null;
}

// Schema.org structured data component
export function SchemaMarkup({ data }: { data: Record<string, any> }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}