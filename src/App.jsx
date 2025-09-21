import { useState } from 'react'
// Import API Key
import apiKey from './config'

// Import components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'

const App = () => {
  const [photos, setPhotos] = useState([])
  const [title, setTitle] = useState('Results')

  // So the search bar doesn't break for now
  const fetchData = (query) => {
    console.log('Fetching Data for: ', query)
    setTitle(query)
    // We'll fetch real data later
  }

  return (
    <div className="container">
      <Search fetchData={fetchData} />
      <Nav />
      <PhotoList photos={photos} title={title} />
    </div>
  )
}

export default App
