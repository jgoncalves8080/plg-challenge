import * as S from './styles'
import { CardReleaseProps } from './types'

export function CardRelease({ name, links, details }: CardReleaseProps) {
  return (
    <S.Container>
      <S.Card>
        <S.CardImage src={links.patch.large} alt={name} />
        <S.CardOverlay>
          <S.CardHeader>
            <S.CardArc xmlns="http://www.w3.org/2000/svg">
              <path />
            </S.CardArc>
            <S.CardThumb src={links.patch.small} alt={name} />
            <S.CardHeaderText>
              <S.CardTitle>{name}</S.CardTitle>
            </S.CardHeaderText>
          </S.CardHeader>
          <S.CardDescription>{details}</S.CardDescription>
        </S.CardOverlay>
      </S.Card>
    </S.Container>
  )
}
