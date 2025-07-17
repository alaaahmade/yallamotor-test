import Script from 'next/script';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

export default function SEO({ title, description, keywords }: SEOProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BitTest',
    url: 'https://yourdomain.com',
    logo: 'https://yourdomain.com/logo.png',
    sameAs: [
      'https://facebook.com/bittest',
      'https://twitter.com/bittest',
      'https://instagram.com/bittest',
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {keywords && (
        <meta
          name="keywords"
          content={keywords.join(', ')}
        />
      )}
    </>
  );
}
