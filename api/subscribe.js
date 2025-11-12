export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, exitScore, country, currentValue, targetValue, exitGap } = req.body

  // Validate email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    // Call ConvertKit API
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/1e9c7f0611/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: 'O5_gQl3ZZoHMnAFSBo-tNulix77jFYrYhKsWAhAFOwE',
          email: email,
          fields: {
            exit_score: exitScore,
            country: country,
            current_value: currentValue,
            target_value: targetValue,
            exit_gap: exitGap
          }
        })
      }
    )

    const data = await response.json()

    if (response.ok) {
      return res.status(200).json({ success: true, data })
    } else {
      return res.status(response.status).json({ error: data })
    }
  } catch (error) {
    console.error('ConvertKit error:', error)
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}