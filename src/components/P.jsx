import styled from 'styled-components'

const sizes = {
  xxxs: '12px',
  xxs: '14px',
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  '2xl': '48px',
  '3xl': '64px',
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
