import styled from 'styled-components'

export const Container = styled.header`
  max-width: 1440px;
  width: 100%;
  padding: 32px 10%; //Ajusta aki para deixar responsivo

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }
    span {
      color: ${(props) => props.theme.colors.white};
      text-align: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors['yellow-dark']};

      position: absolute;
      right: -8.345px;
      top: -8px;
    }
  }
`
export const Location = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  color: ${(props) => props.theme.colors['purple-dark']};
  background: ${(props) => props.theme.colors['purple-light']};
  border-radius: 6px;
`
