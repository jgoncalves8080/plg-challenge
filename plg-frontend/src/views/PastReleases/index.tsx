import React, { useState, useEffect } from 'react'
import { CardRelease } from 'src/components/cardRelease'
import { fetchPastReleases } from './service/useFetchPastReleases'
import * as S from './styles'

const PastReleases: React.FC = () => {
  const [pastReleases, setPastReleases] = useState([])

  useEffect(() => {
    fetchPastReleases()
      .then(response => {
        setPastReleases(response)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <S.Container>
      {pastReleases?.map(({ id, links, name, details }) => (
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

export default PastReleases
