import { useState } from 'react'
import { WalletButton } from '@pollar/react'
import Header from './Header'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)
  const [amount, setAmount] = useState('')
  const [quoted, setQuoted] = useState(false)
  const [funding, setFunding] = useState(false)
  const [reference, setReference] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const rate = 0.006

if (submitted) {
  const bobAmount = Number(amount) * rate

  return (
<div className="app">
  <Header onHome={() => setStarted(false)} />

  <main>
        <div className="badge">NAIJABRIDGE</div>
        <WalletButton />
        <h1>Transfer submitted</h1>

        <p>
          Your Nigerian payment has been submitted for settlement.
        </p>

<div className="status-card">
  <div className="status-item">
    <span className="status-dot">✓</span>
    <div>
      <strong>NGN received</strong>
      <small>Funding reference recorded</small>
    </div>
  </div>

  <div className="status-line"></div>

  <div className="status-item">
    <span className="status-dot active">→</span>
    <div>
      <strong>USDC settlement</strong>
      <small>Via Pollar corridor</small>
    </div>
  </div>

  <div className="status-line"></div>

  <div className="status-item">
    <span className="status-dot pending">○</span>
    <div>
      <strong>BOB payout</strong>
      <small>Bolivia destination</small>
    </div>
  </div>
</div>

<div className="transfer-summary">
  <span>Reference</span>
  <strong>{reference}</strong>

  <span>Route</span>
  <strong>NGN → USDC → BOB</strong>

  <span>Recipient receives</span>
  <strong>{bobAmount.toFixed(2)} BOB</strong>

  <small>Sandbox estimate • Final payout may vary</small>
</div>

        <small>
          Sandbox corridor • Pollar settlement and BOB payout
          require manual processing.
        </small>
      </main>
    </div>
  )
}

  if (started && quoted && funding && reference) {
    return (
      <main className="app">
        <div className="hero">
          <div className="badge">NAIJABRIDGE</div>

          <h1>Payment instructions</h1>

          <p>Use this reference when funding your transfer:</p>

          <h2>{reference}</h2>

          <p>
            Send ₦{Number(amount).toLocaleString()} using the
            selected Nigerian funding rail.
          </p>

          <small>
            Semi-manual sandbox flow
          </small>

          <button onClick={() => setSubmitted(true)}>
            I've made the payment
          </button>
        </div>
      </main>
    )
  }
if (started && quoted && funding) {
  return (
    <main className="app">
      <div className="hero">
        <div className="badge">NAIJABRIDGE</div>

        <h1>Choose how to fund</h1>

        <p>
          Select a local funding rail for your Nigerian transfer.
        </p>

        <div className="funding-options">
          <button
            className="funding-option"
            onClick={() => {
              const newReference =
                'NG-BOL-' +
                Math.random().toString(36).substring(2, 6).toUpperCase()

              setReference(newReference)
            }}
          >
            <strong>🏦 Bank transfer</strong>
            <span>Available in sandbox</span>
          </button>

          <button className="funding-option secondary">
            <strong>📱 Mobile money</strong>
            <span>Alternative local rail</span>
          </button>

          <button className="funding-option secondary">
            <strong>🤝 P2P / Agent</strong>
            <span>Alternative local rail</span>
          </button>
        </div>

        <small>
          Nigerian funding is currently simulated through a
          semi-manual sandbox flow.
        </small>
      </div>
    </main>
  )
}

if (started && quoted) {
  const bobAmount = Number(amount) * rate

  return (
    <main className="app">
      <div className="hero">
        <div className="badge">NAIJABRIDGE</div>

        <h1>Review your transfer</h1>

        <div className="transfer-card">
          <div className="amount-row">
            <span>You send</span>
            <strong>🇳🇬 ₦{Number(amount).toLocaleString()}</strong>
          </div>

          <div className="route">
            🇳🇬 Nigeria
            <span>→</span>
            Pollar
            <span>→</span>
            🇧🇴 Bolivia
          </div>

          <div className="amount-row">
            <span>Recipient gets</span>
            <strong>{bobAmount.toFixed(2)} BOB</strong>
          </div>
        </div>

        <small>
          Demo exchange rate • Final amount may vary
        </small>

        <button onClick={() => setFunding(true)}>
          Continue
        </button>
      </div>
    </main>
  )
}

  if (started) {
    return (
      <main className="app">
        <div className="hero">
          <div className="badge">NAIJABRIDGE</div>

          <h1>How much do you want to send?</h1>

          <p>
            Enter the amount you want to send from Nigeria.
          </p>

          <input
            type="number"
            placeholder="100000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            onClick={() => {
              if (Number(amount) > 0) {
                setQuoted(true)
              }
            }}
          >
            Get quote
          </button>

          <small>NGN → BOB • Demo rate</small>
        </div>
      </main>
    )
  }

  return (
    <main className="app">
      <div className="hero">
        <div className="badge">NAIJABRIDGE</div>

        <h1>Send money from Nigeria to Bolivia.</h1>

        <p>
          A simple payment corridor connecting Nigerian local funding
          rails to Pollar-powered cross-border settlement.
        </p>
        <div className="corridor">
  <div>
    <strong>🇳🇬 Nigeria</strong>
    <span>Local funding</span>
  </div>

  <span className="arrow">→</span>

  <div>
    <strong>⚡ Pollar</strong>
    <span>USDC settlement</span>
  </div>

  <span className="arrow">→</span>

  <div>
    <strong>🇧🇴 Bolivia</strong>
    <span>BOB payout</span>
  </div>
</div>

        <button onClick={() => setStarted(true)}>
          Start a transfer
        </button>

        <small>Sandbox • Nigeria → Bolivia</small>
      </div>
    </main>
  )
}

export default App