const Editor = ({ text, updateText }) => {
  return (
    <div className="child-container">
      <textarea
        id="editor"
        value={text}
        placeholder="Start typing here to get a preview..."
        onChange={updateText}
      ></textarea>
    </div>
  )
}

export default Editor
