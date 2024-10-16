// pages/articles/[slug].js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const externalLinks = {
  'TALE Conference': 'https://2024.tale-conference.org/',
  'e2mip': 'https://e2mip.org/',
  'T4E Conference': 'https://etsociety.org/t4e2024/'// Example
  // ... other articles
};


export default function PostPage() {  // No props needed
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const externalUrl = externalLinks[slug];
    if (externalUrl) {
      window.location.replace(externalUrl);
    } else {
      // Handle case where the slug is not found
      router.push('/404');  // Redirect to 404 or handle the error
    }
  }, [slug, router]);

  return <div>Redirecting...</div>; // Or a loading indicator
}