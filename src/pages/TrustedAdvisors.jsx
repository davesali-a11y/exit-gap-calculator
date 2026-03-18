import { useEffect } from 'react'

export default function TrustedAdvisors() {
  useEffect(() => {
    window.location.href = '/trusted-advisors-page.html'
  }, [])
  return null
}