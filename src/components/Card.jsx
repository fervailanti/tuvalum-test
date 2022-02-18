import styled from 'styled-components'
import { fallback } from '../images'
import Button from './Button'
import P from './P'

const StyledCard = styled.div`
  width: 18em;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  overflow: hidden;
  &:hover {
    img {
      -webkit-transform: scale(1.15);
    }
  }
`

const StyledImg = styled.img`
  width: 100%;
  height: 12em;
  object-fit: cover;
  transition: all 0.3s ease;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 0.1em;
  background-color: white;
  z-index: 30;
`

const Title = styled(P)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Bottom = styled.div`
  margin-top: 0.25em;
  display: flex;
  justify-content: space-between;
`

// TODO: prop types

const Card = ({
  image,
  caption,
  title,
  subtitle,
  actionLabel,
  actionIcon,
  actionDisabled,
  onClick,
}) => {
  return (
    <StyledCard>
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
        {!!title && <Title size="sm">{title}</Title>}
        {(!!subtitle || !!actionLabel) && (
          <Bottom>
            {!!subtitle && (
              <P color="#06E494" bold size="xs">
                {subtitle}
              </P>
            )}
            {(!!actionLabel || !!actionIcon) && (
              <Button
                icon={actionIcon}
                align="flex-end"
                onClick={onClick}
                disabled={actionDisabled}
              >
                {actionLabel}
              </Button>
            )}
          </Bottom>
        )}
      </StyledContainer>
    </StyledCard>
  )
}

export default Card
