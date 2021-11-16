import React, { useEffect, useState } from 'react'
import { TeamsProvider } from '../hooks/clubDataContext'

const TeamsContainer = props => {
  const [fixturesData, setFixturesData] = useState({})
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    fetch('/api/fixtures/')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setFixturesData(result)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else if (Object.keys(fixturesData).length === 0) {
    return <div> Loading...</div>
  } else {
    return (
      <div>
        <TeamsProvider value={fixturesData}>{props.children}</TeamsProvider>
      </div>
    )
  }
}

export default TeamsContainer
