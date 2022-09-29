import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.secondary.blue};
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 30rem;
    max-height: 30rem;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const NavItem = styled.a`
  padding: 10px;
  color: #333;
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  -webkit-transition: all ${({ theme }) => theme.transition.default};
  transition: all ${({ theme }) => theme.transition.default};

  :hover {
    background: #5999e7;
    color: #333;
  }
`
