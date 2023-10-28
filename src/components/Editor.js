import { ScrollSyncPane } from 'react-scroll-sync'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { vim } from '@replit/codemirror-vim'
import ReactCodeMirror from '@uiw/react-codemirror'

const Editor = ({ text, updateText }) => {
  return (
    <div className='child-container'>
      <ScrollSyncPane>
        <ReactCodeMirror
          id='editor'
          value={text}
          height='100%'
          onChange={updateText}
          basicSetup={{ lineNumbers: false, foldGutter: false }}
          extensions={[vim(), markdown({ base: markdownLanguage, codeLanguages: languages })]}
        />
      </ScrollSyncPane>
    </div>
  )
}

export default Editor
