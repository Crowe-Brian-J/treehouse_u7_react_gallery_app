// NotFound.jsx
// Displays a 404 page and optionally allows the user to search for the unmatched URL

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFound = ({ fetchData }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [query] = useState(location.pathname.slice(1)) // Take the part after /

  // For display on button and to fix title on search
  const decodedQuery = decodeURI(query)
  const formattedQuery = decodedQuery
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const handleSearch = () => {
    fetchData(query)
    navigate(`/search/${encodeURIComponent(decodedQuery)}`)
  }

  return (
    <div className="container">
      <h2>404 - Page Not Found</h2>
      {query && (
        <div className="not-found">
          <p>
            It seems like you were trying to search for "{formattedQuery}".
            Would you like to try that?
          </p>
          <button onClick={handleSearch} className="main-nav-link">
            Search for "{formattedQuery}"
          </button>
        </div>
      )}
    </div>
  )
}

export default NotFound
