import DOMPurify from 'dompurify'
import { useState, useEffect } from 'react'
import { ScrollSync } from 'react-scroll-sync'
import PreviewPane from './components/PreviewPane'
import Editor from './components/Editor'
import Header from './components/Header'
import Defaults from './Default'

const App = () => {
  const [text, setText] = useState(Defaults.TEXT)
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
    downloadLink.download = Defaults.FILENAME
    downloadLink.click()
  }

  return (
    <div className="main">
      <Header downloadMarkdown={downloadMarkdown} />
      <ScrollSync>
        <div className="container">
          <Editor text={text} updateText={updateText} />
          <PreviewPane safeHTML={safeHTML} />
        </div>
      </ScrollSync>
    </div>
  )
}

export default App
