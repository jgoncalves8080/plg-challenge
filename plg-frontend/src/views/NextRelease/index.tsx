import React, { useState, useEffect } from 'react'
import { CardRelease } from 'src/components/cardRelease'
import { CardReleaseProps } from 'src/components/cardRelease/types'
import { fetchNextRelease } from './service/useFetchNextRelease'
import * as S from './styles'

const NextRelease: React.FC = () => {
  const [nextRelease, setNextRelease] = useState<CardReleaseProps>({
    name: '',
    links: { patch: { large: '', small: '' } },
    details: ''
  })

  useEffect(() => {
    fetchNextRelease()
      .then(response => {
        console.log('nextRelease', response)
        setNextRelease(response)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <S.Container>
      <CardRelease
        name={nextRelease.name}
        links={nextRelease.links}
        details={nextRelease.details}
      />
    </S.Container>
  )
}

export default NextRelease
