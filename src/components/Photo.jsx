// Photo.jsx
// Displays single photo when mapped over in PhotoList.jsx

const Photo = ({ photo }) => {
  return (
    <li>
      <img src={photo.url} alt={photo.tags} />
    </li>
  )
}

export default Photo
