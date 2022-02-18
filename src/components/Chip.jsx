import styled from 'styled-components'
import { fallback } from '../images'
import colors from '../utils/constants'
import Button from './Button'
import P from './P'

const StyledChip = styled.div`
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  padding: 16px;
  gap: 12px;
`

const StyledImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
`

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  gap: 1px;
`

// TODO: prop types

const Chip = ({ image, caption, title, subtitle, actionLabel, actionIcon, onClick }) => {
  return (
    <StyledChip>
      {!!image && (
        <StyledImg
          src={image}
          onError={({ currentTarget }) => {
            currentTarget.src = fallback
            currentTarget.onerror = null
          }}
        />
      )}
      <StyledContainer>
        {!!caption && <P size="xxs">{caption}</P>}
        {!!title && (
          <P bold size="xxs">
            {title}
          </P>
        )}
        {!!subtitle && (
          <P color={colors.primary} bold size="xs">
            {subtitle}
          </P>
        )}
      </StyledContainer>
      {(!!actionLabel || !!actionIcon) && (
        <Button icon={actionIcon} onClick={onClick}>
          {actionLabel}
        </Button>
      )}
    </StyledChip>
  )
}

export default Chip
