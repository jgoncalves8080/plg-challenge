import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img
          src={
            'https://www.rdstation.com/wp-content/themes/rdstation/assets/img//logos/rebrand/rd-station-cor-md.svg'
          }
          alt="rd-station"
        />
        <S.NavMenu>
          <S.NavItem href="/">Upcoming Releases</S.NavItem>
          <S.NavItem href="/pastReleases">Past Releases</S.NavItem>
          <S.NavItem href="/nextRelease">Next Release</S.NavItem>
          <S.NavItem href="/latestRelease">Latest Release</S.NavItem>
        </S.NavMenu>
      </S.Content>
    </S.Container>
  )
}
