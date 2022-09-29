import React, { useState, useEffect } from 'react'
import { CardRelease } from 'src/components/cardRelease'
import { CardReleaseProps } from 'src/components/cardRelease/types'
import { fetchLatestRelease } from './service/useFetchLatestRelease'
import * as S from './styles'

const LatestRelease: React.FC = () => {
  const [latestRelease, setLatestRelease] = useState<CardReleaseProps>({
    name: '',
    links: { patch: { large: '', small: '' } },
    details: ''
  })

  useEffect(() => {
    fetchLatestRelease()
      .then(response => {
        setLatestRelease(response)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <S.Container>
      <CardRelease
        name={latestRelease.name}
        links={latestRelease.links}
        details={latestRelease.details}
      />
    </S.Container>
  )
}

export default LatestRelease
