import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react'
import { FieldError } from 'react-hook-form'

import { Container, ErrorMessage, Input } from './style'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
}

export const InputForm = forwardRef(function InputForm(
  { style, error, ...rest }: InputFormProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container style={style}>
      <Input ref={ref} {...rest} />

      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  )
})
