export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, exitScore, country, currentValue, targetValue, exitGap } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    // Send to ConvertKit
    const ckResponse = await fetch(
      `https://api.convertkit.com/v3/forms/8761790/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: 'Q_c4PaWhe0EoSxQVyhMmjw',
          email: email
        })
      }
    )

    // Send to Make.com webhook
    const makeResponse = await fetch(
      'https://hook.eu1.make.com/psi09aj1iqf3xlamub11vs5bc5bfj0cu',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          country: country,
          exitScore: exitScore,
          currentValue: currentValue,
          targetValue: targetValue,
          exitGap: exitGap,
          timestamp: new Date().toISOString()
        })
      }
    )

    if (ckResponse.ok && makeResponse.ok) {
      return res.status(200).json({ success: true })
    } else {
      return res.status(500).json({ error: 'Partial failure' })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Failed to process' })
  }
}