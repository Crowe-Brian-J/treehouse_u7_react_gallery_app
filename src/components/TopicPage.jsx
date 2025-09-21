import { useEffect } from 'react'
import PhotoList from './PhotoList'

const TopicPage = ({ topic, fetchData, photos, loading }) => {
  useEffect(() => {
    fetchData(topic)
  }, [topic, fetchData])

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <PhotoList
      photos={photos}
      title={topic.charAt(0).toUpperCase() + topic.slice(1)}
    />
  )
}

export default TopicPage
