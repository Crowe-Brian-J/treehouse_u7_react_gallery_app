const Photo = ({ photo }) => {
  return (
    <li>
      <img src={photo.url} alt={photo.tags} />
    </li>
  )
}

export default Photo
