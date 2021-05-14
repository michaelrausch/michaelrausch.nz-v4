export default function GetLDJson() {
    let structuredData = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://michaelrausch.nz/#ldid",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "38 Merrington Crescent",
          "addressLocality": "Christchurch",
          "addressRegion": "CA",
          "postalCode": "8061",
          "addressCountry": "NZ"
        },
        "name": "Michael Rausch",
        "email": "michael@rausch.nz",
        "telephone": "(027) 952-9554",
        "url": "https://michaelrausch.nz",
        "image": "https://michaelrausch.nz/images/profilephoto.jpg",
        "priceRange": "$$"
      }

      return structuredData
}