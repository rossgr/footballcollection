import React, { useState, useContext, useEffect } from 'react'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import MainComponent from '../components/Main'

import TeamsCard from '../components/Teams/TeamsCard'
import TeamsPosition from '../components/Teams/TeamsPosition'
import FixtureContext from '../hooks/fixtureDataContext'

const TeamsPage = () => {
  const [filter, setFilter] = useState('2021/22')
  const [table, setTable] = useState([])
  const [leagueFilter, setLeagueFilter] = useState('PremierLeague')
  const fixturesData = useContext(FixtureContext)

  const orderTable = leagueFilter => {}

  useEffect(() => {
    if (leagueFilter === 'PremierLeague') {
      const Filtered = fixturesData.data.leagues.PremierLeague
      console.log(Filtered, 'EPL')
      setTable(
        Filtered.sort((a, b) => {
          return a.position - b.position
        })
      )
    } else if (leagueFilter === 'EFLChampionship') {
      const Filtered = fixturesData.data.leagues.EFLChampionship
      console.log(Filtered, 'EFL')
      setTable(
        Filtered.sort((a, b) => {
          return a.position - b.position
        })
      )
    }
  }, [leagueFilter])

  const handleYearFilterChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  const handleLeagueFilterChange = e => {
    e.preventDefault()
    setLeagueFilter(e.target.value)
    console.log(leagueFilter)
  }

  return (
    <MainComponent>
      <section className='text-gray-600 bg-white dark:bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto flex-col align-center justify-items-center flex flex-wrap'>
          <Dropdown handleFilterChange={handleYearFilterChange} name={'year'} />
          <Dropdown handleFilterChange={handleLeagueFilterChange} />
          {filter
            ? table
                .filter(table => table.year === filter)
                .map((year, index) =>
                  year.table
                    .sort((a, b) => {
                      return a.position - b.position
                    })
                    .map(team => {
                      return (
                        <TeamsPosition position={team.position}>
                          <TeamsCard name={team.name} badge={team.clubCrest} />
                        </TeamsPosition>
                      )
                    })
                )
            : table.map((team, index) => (
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
