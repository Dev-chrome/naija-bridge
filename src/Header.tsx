type HeaderProps = {
  onHome: () => void
}

function Header({ onHome }: HeaderProps) {
  return (
    <header className="header">
      <button className="brand" onClick={onHome}>
        NaijaBridge
      </button>

      <span className="testnet">TESTNET</span>
    </header>
  )
}

export default Header