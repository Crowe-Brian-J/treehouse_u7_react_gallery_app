import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PhotoList from './PhotoList'

const SearchResults = ({ fetchData, photos, loading }) => {
  const { query } = useParams()

  useEffect(() => {
    fetchData(query)
  }, [query, fetchData])

  if (loading) {
    return <h2 className="not-found">Loading...</h2>
  }

  return <PhotoList photos={photos} title={query} />
}

export default SearchResults
