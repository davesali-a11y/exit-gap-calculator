export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    email,
    exitScore,
    country,
    currentValue,
    targetValue,
    exitGap,
    exitStage,
    businessType,
    locations,
    revenue,
    margin,
    thinkWorth,
    wantAmount,
    ownerDependence,
    onlineReputation,
    documentation
  } = req.body

  const isRealEmail = email && email.includes('@') && email !== 'anonymous'

  try {
    // Always send to Make.com (Google Sheets) — every submission, regardless of opt-in
    const makeResponse = await fetch(
      'https://hook.eu1.make.com/psi09aj1iqf3xlamub11vs5bc5bfj0cu',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: isRealEmail ? email : '',
          country,
          exitScore,
          currentValue,
          targetValue,
          exitGap,
          timestamp: new Date().toISOString(),
          exitStage,
          businessType,
          locations,
          revenue,
          margin,
          thinkWorth,
          wantAmount,
          ownerDependence,
          onlineReputation,
          documentation
        })
      }
    )

    // Only subscribe to ConvertKit when we have a real email address
    if (isRealEmail) {
      await fetch(
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
    }

    if (makeResponse.ok) {
      return res.status(200).json({ success: true })
    } else {
      const body = await makeResponse.text()
      console.error('Make.com webhook failed:', makeResponse.status, body)
      return res.status(500).json({ error: 'Webhook failed' })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Failed to process' })
  }
}
