import { InputHTMLAttributes } from 'react'

import { Container } from './style'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputForm({ children, ...props }: InputFormProps) {
  return <Container {...props}>{children}</Container>
}
