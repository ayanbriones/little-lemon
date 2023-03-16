import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
const MockBrowserRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
describe('App component', () => {
  it('Renders the App without crashing', () => {
    render(<MockBrowserRouter />)
  })
})
