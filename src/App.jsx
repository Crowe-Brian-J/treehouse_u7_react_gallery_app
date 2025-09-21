import { useState, useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// Import API Key
import apiKey from './config'

// Import components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'
import SearchResults from './components/SearchResults'
import TopicPage from './components/TopicPage'
import NotFound from './components/NotFound'

const App = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async (query) => {
    setLoading(true) // Start Loading

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
    } finally {
      setLoading(false)
    }
  }, [])

  // Use default topic on initial mount
  const defaultTopic = 'cats'

  return (
    <div className="container">
      <Search fetchData={fetchData} />
      <Nav />

      <Routes>
        {/* redirect / to default topic */}
        <Route
          path="/"
          element={<Navigate to={`/${defaultTopic}`} replace />}
        />

        {/* static topic routes */}
        <Route
          path="/cats"
          element={
            <TopicPage
              topic="cats"
              fetchData={fetchData}
              photos={photos}
              loading={loading}
            />
          }
        />
        <Route
          path="/dogs"
          element={
            <TopicPage
              topic="dogs"
              fetchData={fetchData}
              photos={photos}
              loading={loading}
            />
          }
        />
        <Route
          path="/computers"
          element={
            <TopicPage
              topic="computers"
              fetchData={fetchData}
              photos={photos}
              loading={loading}
            />
          }
        />

        {/* dynamic search route */}
        <Route
          path="/search/:query"
          element={
            <SearchResults
              fetchData={fetchData}
              photos={photos}
              loading={loading}
            />
          }
        />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound fetchData={fetchData} />} />
      </Routes>
    </div>
  )
}

export default App
