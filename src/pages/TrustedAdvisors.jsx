import { useEffect, useState } from 'react'
import ROISection from '../components/ROISection'

export default function TrustedAdvisors() {
  const [parts, setParts] = useState(null)

  useEffect(() => {
    fetch('/trusted-advisors-page.html')
      .then(r => r.text())
      .then(html => {
        // Inject <head> styles and font links into document
        const headContent = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ''
        if (headContent) {
          const container = document.createElement('div')
          container.innerHTML = headContent
          container.querySelectorAll('style, link').forEach(node => {
            document.head.appendChild(node.cloneNode(true))
          })
        }

        // Extract body content (strip outer html/head/body wrapper tags)
        const body = html.match(/<body>([\s\S]*)<\/body>/)?.[1] ?? html

        // ROISection inserts between the workflow strip and <main>
        // The split marker is the HTML comment immediately before <main class="main">
        const ROI_SPLIT = '<!-- Main -->'
        const idx = body.indexOf(ROI_SPLIT)

        setParts(
          idx !== -1
            ? { before: body.slice(0, idx), after: body.slice(idx) }
            : { before: body, after: '' }
        )
      })
  }, [])

  if (!parts) return null

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: parts.before }} />
      <ROISection />
      <div dangerouslySetInnerHTML={{ __html: parts.after }} />
    </>
  )
}
