import styled from 'styled-components'

export const Container = styled.header``

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(40 * 1px);
  background-color: #fff;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
`

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(40 * 1px) 0 0 0;
  background-color: #fff;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`

export const Card = styled.div`
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  :hover {
    ${CardOverlay} {
      transform: translateY(0);
    }
    ${CardHeader} {
      transform: translateY(0);
    }
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`
export const CardArc = styled.svg`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;

  path {
    fill: #fff;
  }
`
export const CardThumb = styled.img`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const CardHeaderText = styled.div`
  > span {
    font-size: 0.8em;
    color: #d7bdca;
  }
`

export const CardTitle = styled.h3`
  font-size: 1em;
  margin: 0 0 0.3em;
  color: #6a515e;
`

export const CardDescription = styled.p`
  padding: 0 2em 2em;
  margin: 0;
  color: #d7bdca;
  font-family: 'MockFlowFont';
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
