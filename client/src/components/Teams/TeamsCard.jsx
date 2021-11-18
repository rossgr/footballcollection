import React from 'react'

const TeamsCard = ({ team }) => {
  console.log(team)
  return (
    <tr className='text-gray-300'>
      <td className='text-center'> {team.position} </td>
      <td className=' mx-auto text-center justify-center'>
        <img
          className='w-7 mx-auto'
          src={team.clubCrest}
          alt={team.name + ' badge'}
        />{' '}
      </td>
      <td className=''> {team.name} </td>
      <td className='text-center'>{team.all.played}</td>
      <td className='text-center'>{team.all.win}</td>
      <td className='text-center'>{team.all.draw}</td>
      <td className='text-center'>{team.all.lose}</td>
      <td className='text-center'>{team.all.goals.for}</td>
      <td className='text-center'>{team.all.goals.against}</td>
      <td className='text-center'>
        {team.all.goals.for - team.all.goals.against}
      </td>
      <td className='text-center'>{team.points}</td>
      <td className='text-center'>{team.form}</td>
    </tr>
  )
}

export default TeamsCard
