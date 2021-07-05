const Header = ({ downloadMarkdown }) => {
  return (
    <header>
      <a
        href="https://github.com/dwrik"
        target="_blank"
        rel="noreferrer"
        className="links"
      >
        <h1>Markdown Previewer</h1>
      </a>
      <button className="button" onClick={downloadMarkdown}>
        Download as File
      </button>
    </header>
  )
}

export default Header
