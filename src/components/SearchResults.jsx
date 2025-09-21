import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PhotoList from './PhotoList'

const SearchResults = ({ fetchData, photos }) => {
  const { query } = useParams()

  useEffect(() => {
    fetchData(query)
  }, [query, fetchData])

  return <PhotoList photos={photos} title={query} />
}

export default SearchResults
