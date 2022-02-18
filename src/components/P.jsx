import styled from 'styled-components'

const sizes = {
  xxs: '0.75em',
  xs: '1em',
  sm: '1.25em',
  md: '1.5em',
  lg: '2em',
  xl: '2.5em',
  '2xl': '3em',
  '3xl': '4em',
}

const StyledP = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size }) => sizes[size]};
  font-weight: ${({ bold }) => (bold ? '600' : '300')};
  margin: 0;
`

// TODO: type props

const P = ({ color = 'black', size = 'xs', bold = false, ...props }) => {
  return (
    <StyledP color={color} size={size} bold={bold} {...props}>
      {props.children}
    </StyledP>
  )
}

export default P
