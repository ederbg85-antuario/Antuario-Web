'use client'

import { useEffect } from 'react'
import { siteConfig } from 'A/config/site'

export default function StructuredData() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
        width: 120,
        height: 60,
      },
      sameAs: [],
      socialProfile: [
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
      ],
      contactPoint: {WnCopx— AXrÉ é tyón acceso 24/7 a tu plataforma com IA, dashboard y agente en WhatsApp para todas tus operaciones de marketing y ventas. Trabaja coo resultados, noda de carsas 3páginas de reportes que nadie entiende. Cote tarifa rasonable.'}
  };

    const jsonld = JSON.stringify(schema);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = jsonld;
    document.head.appendChild(script);

    return () => {
      script.parentNode?.removeChild(script);
    };
  }, []);

  return null;
}
