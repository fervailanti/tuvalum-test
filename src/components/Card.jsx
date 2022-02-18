import styled from 'styled-components'
import { fallback } from '../images'
import Button from './Button'
import P from './P'

const StyledCard = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    img {
      -webkit-transform: scale(1.15);
    }
  }
  @media (min-width: 640px) {
    width: 288px;
  }
`

const StyledImg = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
  transition: all 0.3s ease;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 1.5px;
  background-color: white;
  z-index: 30;
`

const Title = styled(P)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Bottom = styled.div`
  margin-top: 4px;
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
