import { useState, useEffect } from 'react'
// Import API Key
import apiKey from './config'

// Import components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'
import { use } from 'react'

const App = () => {
  const [photos, setPhotos] = useState([])
  const [title, setTitle] = useState('Results')

  const fetchData = async (query) => {
    setTitle(query) // Update search title
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
          query
        )}&image_type=photo&per_page=24`
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()

      // Pixabay returns images in 'hits' array
      const photosData = data.hits.map((hit) => ({
        id: hit.id,
        url: hit.webformatURL,
        tags: hit.tags
      }))

      setPhotos(photosData)
    } catch (err) {
      console.error('Error fetching data:', err)
      setPhotos([]) // Clear photos on error
    }
  }

  // Fetch dogs as default topic on mount because dogs > cats
  useEffect(() => {
    fetchData('dogs')
  }, [])

  return (
    <div className="container">
      <Search fetchData={fetchData} />
      <Nav />
      <PhotoList photos={photos} title={title} />
    </div>
  )
}

export default App
