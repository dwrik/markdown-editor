const Header = ({ downloadMarkdown }) => {
  return (
    <header>
      <a
        href="https://github.com/dwrik/markdown-editor/"
        target="_blank"
        rel="noreferrer"
        className="links"
      >
        <h1>Markdown Editor</h1>
      </a>
      <button className="button" onClick={downloadMarkdown}>
        Download
      </button>
    </header>
  )
}

export default Header
