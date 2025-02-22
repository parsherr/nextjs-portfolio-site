'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde loader'ı göster
    setLoading(true);

    // Minimum loader gösterim süresi
    const minLoadTime = 3000;

    // Loader'ı kaldırmak için zamanlayıcı
    const timer = setTimeout(() => {
      setLoading(false);
    }, minLoadTime);

    // Component unmount olduğunda cleanup yap
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          opacity: loading ? 1 : 0,
          visibility: loading ? 'visible' : 'hidden',
          transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
          pointerEvents: loading ? 'auto' : 'none',
        }}
      >
        <Loader />
      </div>
      <div
        style={{
          opacity: loading ? 0 : 1,
          visibility: loading ? 'hidden' : 'visible',
          transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
}