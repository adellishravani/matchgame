import './index.css'

const ImageItem = props => {
  const {imageDetails, matching} = props
  const {thumbnailUrl, id} = imageDetails

  const Matching = () => {
    matching(id)
  }

  return (
    <div className="list">
      <li>
        <button type="button">
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="image"
            onClick={Matching}
          />
        </button>
      </li>
    </div>
  )
}

export default ImageItem
