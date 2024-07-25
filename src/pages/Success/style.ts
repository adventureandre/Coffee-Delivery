import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 450px;
  padding: 10px 10%;

  display: flex;
  flex-direction: column;
`

export const SuccessTitle = styled.div`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 4px;

  h2 {
    color: ${({ theme }) => theme.colors['yellow-dark']};
    ${mixins.fonts.titleL}
  }
  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    ${mixins.fonts.textL}
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 40px;
`

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  border: 1px solid;
  border-radius: 0 40px 0 40px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(90deg, #dbac2c 0%, #8047f8 100%) border-box;
  border: 1px solid transparent;

  div {
    display: flex;
    flex-direction: row;
    gap: 12px;

    div {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
