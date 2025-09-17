// src/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(): MDXComponents {
  return {
    // style common elements globally (optional)
    h1: ({ className, ...props }) => (
      <h1 className={`text-3xl md:text-4xl font-bold ${className ?? ''}`} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={`text-sm leading-7 text-muted ${className ?? ''}`} {...props} />
    ),
  };
}
