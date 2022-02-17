import * as icons from '@material-ui/icons'

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

// TODO: prop types

const Icon = ({ name, className, color = 'black', size = 'sm' }) => {
  const TargetIcon = icons[name]
  const sizeValue = sizes[size]
  const iconStyle = { color, width: sizeValue, height: sizeValue }
  return <TargetIcon style={iconStyle} className={className} />
}

export default Icon
