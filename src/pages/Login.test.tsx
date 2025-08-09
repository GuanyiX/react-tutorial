import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Login from './Login'

describe('Login', () => {
  it('renders email and password fields and a submit button', () => {
    render(<Login />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i, { selector: 'input', exact: false })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('toggles password visibility', async () => {
    render(<Login />)
    const pwd = screen.getByLabelText(/password/i, { selector: 'input', exact: false }) as HTMLInputElement
    expect(pwd.type).toBe('password')

    const toggle = screen.getByRole('button', { name: /show password/i })
    await userEvent.click(toggle)
    expect(pwd.type).toBe('text')

    await userEvent.click(screen.getByRole('button', { name: /hide password/i }))
    expect(pwd.type).toBe('password')
  })
})
