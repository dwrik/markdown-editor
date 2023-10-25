import { ScrollSyncPane } from 'react-scroll-sync'

const Editor = ({ text, updateText }) => {
  return (
    <div className="child-container">
      <ScrollSyncPane>
        <textarea
          id="editor"
          value={text}
          placeholder="Start typing here to get a preview..."
          onChange={updateText}
        ></textarea>
      </ScrollSyncPane>
    </div>
  )
}

export default Editor
