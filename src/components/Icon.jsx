import * as icons from '@material-ui/icons'
import styled from 'styled-components'

const sizes = {
  xxs: '12px',
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  '2xl': '48px',
  '3xl': '64px',
}

const IconWrapper = styled.div`
  cursor: ${(props) => props.cursor || 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
`

// TODO: prop types

const Icon = ({ name, className, color = 'black', size = 'sm', onClick, cursor }) => {
  const TargetIcon = icons[name]
  const sizeValue = sizes[size]
  const iconStyle = { color, width: sizeValue, height: sizeValue }
  return (
    <IconWrapper className={className} onClick={onClick} cursor={cursor}>
      <TargetIcon style={iconStyle} />
    </IconWrapper>
  )
}

export default Icon
