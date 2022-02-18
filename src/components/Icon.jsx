import * as icons from '@material-ui/icons'
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
