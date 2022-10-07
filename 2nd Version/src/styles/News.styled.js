import styled from 'styled-components'

export const BoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    margin-top: 90px;
    width: 50%;
  }
`