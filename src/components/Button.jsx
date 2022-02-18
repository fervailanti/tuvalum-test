import styled from 'styled-components'
import Icon from './Icon'
import P from './P'

const StyledButton = styled.button`
  margin-top: 4px;
  background-color: #06e494;
  outline: none;
  border: none;
  border-radius: 160px;
  padding: 8px ${(props) => (props.isIconOnly ? '8px' : '16px')};
  cursor: pointer;
  align-self: ${(props) => props.align};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #05b071;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`

// TODO: prop types

const Button = ({
  children,
  icon,
  align = 'center',
  textSize = 'xs',
  iconSize = 'xs',
  disabled = false,
  ...props
}) => {
  const isIconOnly = !children && !!icon
  return (
    <StyledButton align={align} isIconOnly={isIconOnly} disabled={disabled} {...props}>
      {!!icon && (
        <Icon
          name={icon}
          color="white"
          size={iconSize}
          cursor={disabled ? 'not-allowed' : 'pointer'}
        />
      )}
      {!!children && (
        <P color="white" size={textSize}>
          {children}
        </P>
      )}
    </StyledButton>
  )
}

export default Button
