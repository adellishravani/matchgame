import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {displayText, tabId} = tabDetails

  const onclicktabitem = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onclicktabitem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
