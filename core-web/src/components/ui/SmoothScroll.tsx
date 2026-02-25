'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {/* @ts-expect-error - React 19 types incompat with studio-freight */}
      {children}
    </ReactLenis>
  );
}
