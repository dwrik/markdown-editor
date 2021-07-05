import DOMPurify from 'dompurify'
import { useState, useEffect } from 'react'
import { DEFAULT_TEXT } from './Default'
import PreviewPane from './components/PreviewPane'
import Editor from './components/Editor'
import Header from './components/Header'

const DEFAULT_FILENAME = 'markdown-preview.md'

const App = () => {
  const [text, setText] = useState(DEFAULT_TEXT)
  const [safeHTML, setSafeHTML] = useState('')

  const updateText = ({ target }) => {
    setText(target.value)
  }

  useEffect(() => {
    const cleanText = DOMPurify.sanitize(text)
    setSafeHTML(cleanText)
  }, [text])

  const downloadMarkdown = () => {
    const file = new Blob([text], { type: 'text/plain; charset=utf-8' })
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(file)
    downloadLink.download = DEFAULT_FILENAME
    downloadLink.click()
  }

  return (
    <div className="main">
      <Header downloadMarkdown={downloadMarkdown} />
      <div className="container">
        <Editor text={text} updateText={updateText} />
        <PreviewPane safeHTML={safeHTML} />
      </div>
    </div>
  )
}

export default App
