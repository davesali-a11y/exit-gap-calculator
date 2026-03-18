import React, { useEffect, useState } from 'react'

export default function TrustedAdvisors() {
  const [html, setHtml] = useState('')

  useEffect(() => {
    fetch('/trusted-advisors-page.html')
      .then(r => r.text())
      .then(text => {
        document.open()
        document.write(text)
        document.close()
      })
  }, [])

  return null
}
