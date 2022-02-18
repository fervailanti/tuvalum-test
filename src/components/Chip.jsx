import styled from 'styled-components'
import { fallback } from '../images'
import Button from './Button'
import P from './P'

const StyledChip = styled.div`
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 0.5em;
  overflow: hidden;
  align-items: center;
  padding: 1em;
  gap: 0.75em;
`

const StyledImg = styled.img`
  width: 3em;
  height: 3em;
  object-fit: cover;
  border-radius: 0.25em;
`

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
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
          <P color="#06E494" bold size="xs">
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
