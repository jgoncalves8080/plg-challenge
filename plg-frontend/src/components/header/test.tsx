/**
 * @jest-environment jsdom
 */
import { render } from '../../utils/tests/wrapper'
import { Header } from '.'

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render link correctly', () => {
    const { getAllByRole } = render(<Header />)
    const links = getAllByRole('link')

    expect(links[0].textContent).toEqual('Upcoming Releases')
    expect(links[0].ATTRIBUTE_NODE).toContain('/')

    expect(links[1].textContent).toEqual('Past Releases')
    expect(links[0].ATTRIBUTE_NODE).toContain('/pastReleases')

    expect(links[2].textContent).toEqual('Latest Release')
    expect(links[0].ATTRIBUTE_NODE).toContain('/latestRelease')

    expect(links[2].textContent).toEqual('Next Release')
    expect(links[0].ATTRIBUTE_NODE).toContain('/nextRelease')
  })
})
