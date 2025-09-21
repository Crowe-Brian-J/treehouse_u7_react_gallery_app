import { useEffect } from 'react'
import PhotoList from './PhotoList'

const TopicPage = ({ topic, fetchData, photos }) => {
  useEffect(() => {
    fetchData(topic)
  }, [topic, fetchData])

  return (
    <PhotoList
      photos={photos}
      title={topic.charAt(0).toUpperCase() + topic.slice(1)}
    />
  )
}

export default TopicPage
