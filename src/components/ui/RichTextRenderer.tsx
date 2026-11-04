import React from 'react'

interface RichTextProps {
  content: any
  className?: string
}

export function RichTextRenderer({ content, className = '' }: RichTextProps) {
  if (!content) return null

  // Nếu content là dạng chuỗi thông thường (VD: html hoặc markdown)
  if (typeof content === 'string') {
    return <div className={`prose max-w-none text-gray-700 leading-relaxed ${className}`} dangerouslySetInnerHTML={{ __html: content }} />
  }

  // Nếu content là Payload Lexical JSON object { root: { children: [...] } }
  if (content && typeof content === 'object' && content.root && Array.isArray(content.root.children)) {
    return (
      <div className={`prose prose-lg max-w-none text-gray-700 space-y-4 leading-relaxed ${className}`}>
        {content.root.children.map((node: any, idx: number) => renderLexicalNode(node, idx))}
      </div>
    )
  }

  return null
}

function renderLexicalNode(node: any, key: number | string): React.ReactNode {
  if (!node) return null

  // Xử lý text thông thường
  if (node.type === 'text' || typeof node.text === 'string') {
    let text: React.ReactNode = node.text
    if (node.format & 1) text = <strong key="b">{text}</strong>
    if (node.format & 2) text = <em key="i">{text}</em>
    if (node.format & 8) text = <u key="u">{text}</u>
    return <React.Fragment key={key}>{text}</React.Fragment>
  }

  // Xử lý paragraph
  if (node.type === 'paragraph') {
    return (
      <p key={key} className="text-base text-gray-700 leading-relaxed">
        {node.children?.map((child: any, i: number) => renderLexicalNode(child, i))}
      </p>
    )
  }

  // Xử lý headings
  if (node.type === 'heading') {
    const tag = node.tag || 'h2'
    const headingClasses: Record<string, string> = {
      h1: 'text-3xl font-bold text-gray-900 mt-8 mb-4',
      h2: 'text-2xl font-bold text-gray-900 mt-7 mb-3',
      h3: 'text-xl font-bold text-gray-900 mt-6 mb-2',
      h4: 'text-lg font-bold text-gray-900 mt-5 mb-2',
    }
    const className = headingClasses[tag] || headingClasses.h2
    const children = node.children?.map((child: any, i: number) => renderLexicalNode(child, i))

    if (tag === 'h1') return <h1 key={key} className={className}>{children}</h1>
    if (tag === 'h3') return <h3 key={key} className={className}>{children}</h3>
    if (tag === 'h4') return <h4 key={key} className={className}>{children}</h4>
    return <h2 key={key} className={className}>{children}</h2>
  }

  // Xử lý list
  if (node.type === 'list') {
    const ListTag = node.listType === 'number' ? 'ol' : 'ul'
    const listClass = node.listType === 'number' ? 'list-decimal pl-6 space-y-2' : 'list-disc pl-6 space-y-2'
    return (
      <ListTag key={key} className={listClass}>
        {node.children?.map((child: any, i: number) => renderLexicalNode(child, i))}
      </ListTag>
    )
  }

  // Xử lý listitem
  if (node.type === 'listitem') {
    return (
      <li key={key} className="text-gray-700">
        {node.children?.map((child: any, i: number) => renderLexicalNode(child, i))}
      </li>
    )
  }

  // Xử lý blockquote
  if (node.type === 'quote') {
    return (
      <blockquote key={key} className="p-4 border-l-4 border-green-600 bg-green-50/50 rounded-r-lg italic text-gray-800 my-4">
        {node.children?.map((child: any, i: number) => renderLexicalNode(child, i))}
      </blockquote>
    )
  }

  // Xử lý Upload (Hình ảnh minh họa xen kẽ chuẩn báo điện tử)
  if (node.type === 'upload') {
    const mediaObj = typeof node.value === 'object' && node.value !== null ? node.value : null
    const url = mediaObj?.url || (typeof node.value === 'string' ? node.value : null)
    if (!url) return null

    const alt = mediaObj?.alt || node.fields?.caption || 'Hình ảnh minh họa bài viết'
    const caption = node.fields?.caption || mediaObj?.caption

    return (
      <figure key={key} className="my-6 sm:my-8 text-center not-prose">
        <div className="inline-block overflow-hidden rounded-xl shadow-md border border-gray-200/80 bg-gray-50/50 max-w-full">
          <img
            src={url}
            alt={alt}
            className="h-auto max-h-[620px] w-auto max-w-full mx-auto object-contain block rounded-xl"
            loading="lazy"
          />
        </div>
        {caption && (
          <figcaption className="mt-2.5 text-xs sm:text-sm text-gray-500 italic max-w-2xl mx-auto px-4">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  // Xử lý link
  if (node.type === 'link') {
    return (
      <a
        key={key}
        href={node.fields?.url || '#'}
        target={node.fields?.newTab ? '_blank' : undefined}
        rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
        className="text-green-700 underline hover:text-green-800"
      >
        {node.children?.map((child: any, i: number) => renderLexicalNode(child, i))}
      </a>
    )
  }

  // Mặc định lặp qua children
  if (Array.isArray(node.children)) {
    return (
      <React.Fragment key={key}>
        {node.children.map((child: any, i: number) => renderLexicalNode(child, i))}
      </React.Fragment>
    )
  }

  return null
}
