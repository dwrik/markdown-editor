import { useState, useEffect, useCallback } from 'react'
import { ScrollSync } from 'react-scroll-sync'
import toast, { Toaster } from 'react-hot-toast'
import PreviewPane from './components/PreviewPane'
import DOMPurify from 'dompurify'
import Editor from './components/Editor'
import Header from './components/Header'
import Defaults from './Default'

const App = () => {
  const [text, setText] = useState(Defaults.TEXT)
  const [safeHTML, setSafeHTML] = useState('')

  const updateText = useCallback((value) => {
    setText(value)
  }, [])

  useEffect(() => {
    const cleanText = DOMPurify.sanitize(text)
    setSafeHTML(cleanText)
  }, [text])

  const copyMarkdown = () => {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  const downloadMarkdown = () => {
    const file = new Blob([text], { type: 'text/plain; charset=utf-8' })
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(file)
    downloadLink.download = Defaults.FILENAME
    downloadLink.click()
    toast.success('Download ready')
  }

  return (
    <div className='main'>
      <Toaster toastOptions={{
        iconTheme: {
          primary: '#F88',
          secondary: '#fff',
        },
      }} />
      <Header
        copyMarkdown={copyMarkdown}
        downloadMarkdown={downloadMarkdown}
      />
      <ScrollSync>
        <div className='container'>
          <Editor text={text} updateText={updateText} />
          <PreviewPane safeHTML={safeHTML} />
        </div>
      </ScrollSync>
    </div>
  )
}

export default App
