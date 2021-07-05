import marked from 'marked'

const PreviewPane = ({ safeHTML }) => {
  return (
    <div className="child-container">
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(safeHTML),
        }}
      ></div>
    </div>
  )
}

export default PreviewPane
