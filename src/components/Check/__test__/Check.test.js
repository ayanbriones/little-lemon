import { render, screen } from '@testing-library/react'
import Check from '../Check'

describe('Check component', () => {
  it('renders the Check image', () => {
    render(<Check />)
    const img = screen.getByAltText('check')
    expect(img).toBeInTheDocument()
  })
})
