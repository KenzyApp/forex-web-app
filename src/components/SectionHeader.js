import React from 'react'
import styled from 'styled-components/macro'
import { base } from '../utils/theme'
import Container from './Container'

const Wrapper = styled.header`
  ${base}
`

const getPaddingBottom = ({ paddingBottom = '' }) => paddingBottom

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-transform: lowercase;
  padding: 1rem 0 ${getPaddingBottom};
`

const SectionHeader = ({ children, paddingBottom, ...props }) => (
  <Wrapper {...props}>
    <Container>
      <Title paddingBottom={paddingBottom}>{children}</Title>
    </Container>
  </Wrapper>
)

export default SectionHeader