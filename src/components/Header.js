const Header = ({ downloadMarkdown }) => {
  return (
    <header>
      <a
        href="https://github.com/dwrik/markdown-previewer/"
        target="_blank"
        rel="noreferrer"
        className="links"
      >
        <h1>Markdown Previewer</h1>
      </a>
      <button className="button" onClick={downloadMarkdown}>
        Download
      </button>
    </header>
  )
}

export default Header
