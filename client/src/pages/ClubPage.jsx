import React, { useEffect, useState, useContext } from 'react'
import Footer from '../components/General/Footer'
import MainComponent from '../components/General/Main'
import TeamsContext from '../hooks/clubDataContext'
import PositionsDisplay from '../components/Club/PositionsDisplay'
import ClubHeader from '../components/Club/ClubHeader'

const ClubPage = () => {
  const [team, setTeam] = useState({})

  const clubData = useContext(TeamsContext)

  useEffect(() => {
    setTeam(clubData.data.leagues.PremierLeague[12])
  }, [clubData])

  return (
    <MainComponent>
      <section className='text-gray-600  dark:text-gray-300 bg-white dark:bg-gray-900 body-font'>
        <div className='container  px-5 py-24 mx-auto'>
          <ClubHeader team={team} />
          <PositionsDisplay team={team} position={'Goalkeeper'} />
          <PositionsDisplay team={team} position={'Defender'} />
          <PositionsDisplay team={team} position={'Midfielder'} />
          <PositionsDisplay team={team} position={'Forward'} />
        </div>
      </section>
      <Footer />
    </MainComponent>
  )
}

export default ClubPage
