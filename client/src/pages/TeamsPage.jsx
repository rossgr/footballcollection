import React, { useState, useContext, useEffect } from 'react'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'

import TeamsCard from '../components/Teams/TeamsCard'
import TeamsPosition from '../components/Teams/TeamsPosition'
import TeamsContext from '../hooks/dataContext'

const TeamsPage = () => {
  const [teams, setTeams] = useState([])
  const [filter, setFilter] = useState('')

  const clubData = useContext(TeamsContext)

  useEffect(() => {
    setTeams(clubData.data[0].PremierLeague)
    console.log(teams)
  }, [clubData, teams])

  const handleFilterChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  return (
    <MainComponent>
      <section className='text-gray-600 bg-white dark:bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex-col align-center justify-items-center flex flex-wrap'>
          <Dropdown handleFilterChange={handleFilterChange} />
          {teams.map((team, index) => (
            <TeamsPosition key={index} position={index + 1}>
              <TeamsCard name={team.name} badge={team.badge} />
            </TeamsPosition>
          ))}
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default TeamsPage
