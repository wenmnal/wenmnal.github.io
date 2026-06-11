'use client';

import { useEffect, useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import type { BibTeXInlineNode } from '@/types/publication';

interface FormattedBibTeXTextProps {
  nodes?: BibTeXInlineNode[];
  fallback: string;
}

function MathNode({ tex, display }: { tex: string; display: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const delim = display ? '$$' : '$';
  const source = `${delim}${tex}${delim}`;

  if (!mounted) {
    return <span suppressHydrationWarning>{source}</span>;
  }

  return (
    <MathJax inline={!display} dynamic>
      {source}
    </MathJax>
  );
}

function renderNodes(nodes: BibTeXInlineNode[], keyPrefix = 'node'): React.ReactNode {
  return nodes.map((node, index) => {
    const key = `${keyPrefix}-${index}`;

    if (node.type === 'text') {
      return node.text;
    }

    if (node.type === 'math') {
      return <MathNode key={key} tex={node.tex} display={node.display} />;
    }

    const children = renderNodes(node.children, key);

    if (node.type === 'em') {
      return <em key={key}>{children}</em>;
    }

    if (node.type === 'strong') {
      return <strong key={key}>{children}</strong>;
    }

    if (node.type === 'smallCaps') {
      return (
        <span key={key} className="font-semibold uppercase tracking-[0.08em] text-[0.88em]">
          {children}
        </span>
      );
    }

    if (node.type === 'sup') {
      return <sup key={key}>{children}</sup>;
    }

    return <sub key={key}>{children}</sub>;
  });
}

export default function FormattedBibTeXText({ nodes, fallback }: FormattedBibTeXTextProps) {
  if (!nodes || nodes.length === 0) {
    return <>{fallback}</>;
  }

  return <>{renderNodes(nodes)}</>;
}
