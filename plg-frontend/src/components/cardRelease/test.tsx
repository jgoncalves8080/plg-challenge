/**
 * @jest-environment jsdom
 */
import { render } from '../../utils/tests/wrapper'
import { CardRelease } from '.'
import { mockLauch } from './mock'

describe('CardRelease Component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<CardRelease {...mockLauch} />)
    expect(container.firstChild).toMatchSnapshot()

    expect(getByText(mockLauch.name))
  })

  it('should render the information received via props', () => {
    const { getAllByRole, getByText } = render(<CardRelease {...mockLauch} />)

    expect(getAllByRole('img')[0]).toHaveAttribute(
      'src',
      mockLauch.links.patch.large
    )

    expect(getAllByRole('img')[1]).toHaveAttribute(
      'src',
      mockLauch.links.patch.small
    )

    expect(getByText(mockLauch.name)).toBeInTheDocument()
    expect(getByText(mockLauch.details)).toBeInTheDocument()
  })
})
