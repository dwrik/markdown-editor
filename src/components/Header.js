const Header = ({ copyMarkdown, downloadMarkdown }) => {
  return (
    <header>
      <a
        href='https://github.com/dwrik/markdown-editor/'
        target='_blank'
        rel='noreferrer'
        className='links'
      >
        <h1>Markdown Editor</h1>
      </a>
      <div className='buttons'>
        <button className='button' onClick={copyMarkdown}>
          <i className='bi bi-copy' />
        </button>
        <button className='button' onClick={downloadMarkdown}>
          <i className='bi bi-download' />
        </button>
      </div>
    </header>
  )
}

export default Header
