import { Dispatch, SetStateAction, useState } from 'react'
import Button from '_atoms/Button&Link/Button/Button'
import { IncidentState } from '_containers/IncidentPage/IncidentPage'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import MultiPinCard from '_molecules/MultiPinCard/MultiPinCard'
import { ButtonAppearance } from '_types/CMS/button'
import { IncidentContentMulti } from '_types/local/incidents'
import styles from './MultiPinCards.module.scss'

export interface MultiPinCardsProps {
  incidentState: IncidentState
  setIncidentState: Dispatch<SetStateAction<IncidentState>>
  pullCardsUp?: boolean
}

const MultiPinCards = ({
  incidentState,
  setIncidentState,
  pullCardsUp,
}: MultiPinCardsProps) => {
  const [currentCard, setCurrentCard] = useState(0)
  const incident = incidentState.incident as IncidentContentMulti
  const incidentsCount =
    (incident.unplannedIncidents?.length || 0) +
    (incident.plannedIncidents?.length || 0) +
    (incident.restoredIncidents?.length || 0)

  const isWide = incidentsCount <= 2
  const cardButtons = new Array(incidentsCount).fill(0)

  const handleCardChoice = (index: number) => {
    setCurrentCard(index)
  }

  return (
    <ComponentLayout
      containerClass={styles.multiPinWrapper}
      {...(pullCardsUp && { innerClass: styles.multiPinInner })}
    >
      <p className={styles.cardChooserText}>Select an incident to view below</p>
      <div className={styles.cardsChooserWrapper}>
        <div className={styles.cardsChooser}>
          {cardButtons.map((_, index) => (
            <Button
              key={index}
              appearance={ButtonAppearance.BLANK}
              className={styles.cardChooserButton}
              data-is-selected={currentCard === index}
              onClick={() => handleCardChoice(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
      <div
        className={styles.cards}
        style={{
          transform: `translateX(calc(-${currentCard * 100}% - ${
            currentCard * 10
          }px))`,
        }}
      >
        {incident?.unplannedIncidents?.map((incident, index) => (
          <MultiPinCard
            key={index}
            isWide={isWide}
            incident={incident}
            setIncidentState={setIncidentState}
          />
        ))}

        {incident?.restoredIncidents?.map((incident, index) => (
          <MultiPinCard
            key={index}
            isWide={isWide}
            incident={incident}
            setIncidentState={setIncidentState}
          />
        ))}

        {incident?.plannedIncidents?.map((incident, index) => (
          <MultiPinCard
            key={index}
            isWide={isWide}
            incident={incident}
            setIncidentState={setIncidentState}
          />
        ))}
      </div>
    </ComponentLayout>
  )
}

export default MultiPinCards
