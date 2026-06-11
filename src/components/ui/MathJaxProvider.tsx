'use client';

import { MathJaxContext } from 'better-react-mathjax';

const mathjaxConfig = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    processEscapes: true,
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
  },
};

export default function MathJaxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MathJaxContext version={3} config={mathjaxConfig}>
      {children}
    </MathJaxContext>
  );
}
