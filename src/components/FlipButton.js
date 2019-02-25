import React from 'react'
import styled from 'styled-components'
import { fg, base, invert } from '../utils/theme'
import Container from './Container'

const gap = '0.375rem'
const border = '1px solid'
const fontSize = '0.75rem'

const Wrapper = styled.button`
  ${base}
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0 ${gap};
  display: flex;
  border: ${border} ${fg};
  border-radius: 4px;
  align-items: center;
`

const Icon = ({ color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth={strokeWidth}
    {...props}
  >
    <polyline points='16 3 21 3 21 8' />
    <line x1='4' y1='20' x2='21' y2='3' />
    <polyline points='21 16 21 21 16 21' />
    <line x1='15' y1='15' x2='21' y2='21' />
    <line x1='4' y1='4' x2='9' y2='9' />
  </svg>
)

const StyledIcon = styled(Icon)`
  height: ${fontSize};
  width: ${fontSize};
  margin: ${gap} 0;
  display: block;
  flex: 0 0 auto;
`

const Rate = styled.div`
  font-weight: 500;
  font-size: ${fontSize};
  line-height: 1rem;
  padding: 0.25rem 0 0.25rem ${gap};
  border-left: ${border} ${fg};
  margin-left: ${gap};
  flex: 0 0 auto;
`

const FlipButton = invert(({ rate, ...props }) => {
  if (typeof rate !== 'number') return null
  return (
    <Wrapper type='button' {...props}>
      <StyledIcon />
      <Rate>{rate}</Rate>
    </Wrapper>
  )
})

const AbsoluteButton = styled(FlipButton)`
  position: absolute;
  transform: translate(-2px, -50%);
`

FlipButton.Absolute = ({ className, style, ...props }) => (
  <Container className={className} style={style}>
    <AbsoluteButton {...props} />
  </Container>
)

export default FlipButton
