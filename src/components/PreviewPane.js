import { marked } from 'marked'
import { ScrollSyncPane } from 'react-scroll-sync'

const PreviewPane = ({ safeHTML }) => {
  return (
    <div className="child-container">
      <ScrollSyncPane>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(safeHTML),
        }}
      ></div>
      </ScrollSyncPane>
    </div>
  )
}

export default PreviewPane
