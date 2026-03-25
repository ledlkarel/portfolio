export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="muted">© {new Date().getFullYear()} Karel Lédl</p>
        <p className="muted">Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}

