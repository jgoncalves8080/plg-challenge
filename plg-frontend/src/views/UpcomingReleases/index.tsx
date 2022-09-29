import React, { useState, useEffect } from 'react'
import { CardRelease } from 'src/components/cardRelease'
import { fetchUpcomingRelease } from './service/useFetchUpcomings'
import * as S from './styles'

const UpcomingReleases: React.FC = () => {
  const [upcomingReleases, setUpcomingRelease] = useState([])

  useEffect(() => {
    fetchUpcomingRelease()
      .then(response => {
        console.log('upcomingReleases', response)
        setUpcomingRelease(response)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <S.Container>
      {upcomingReleases?.map(({ id, links, name, details }) => (
        <CardRelease
          key={id}
          id={id}
          name={name}
          links={links}
          details={details}
        />
      ))}
    </S.Container>
  )
}

export default UpcomingReleases
