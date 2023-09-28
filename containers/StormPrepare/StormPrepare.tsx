import StormLandingBanner from '_organism/StormLandingBanner/StormLandingBanner'
import InformationCard from '_molecules/InformationCard/InformationCard'
import StormChecklist from '_molecules/StormChecklist/StormChecklist'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import renderComponent from '_hoc/RenderComponent/RenderComponent'
import { StormPrepareType } from '_types/CMS/pages'
import styles from './StormPrepare.module.scss'
import RichText from '_atoms/RichText/RichText'
import Layout from '_hoc/Layout/Layout'

export interface StormPrepareProps {
  data: StormPrepareType
}

export const StormPrepare = ({ data }: StormPrepareProps) => {
  const {
    stormPrepareBody,
    informationCard,
    stormChecklist,
    stormBanner,
    __typename,
    components,
  } = data

  const inforCard = informationCard ? informationCard[0] : null

  return (
    <Layout data={data}>
      {stormBanner && stormBanner.length && (
        <StormLandingBanner {...stormBanner[0]} />
      )}
      <ComponentLayout containerClass={styles.stormPrepareMain}>
        {(!!inforCard || !!stormPrepareBody) && (
          <>
            <div className={styles.stormPrepareContent}>
              {!!informationCard && <InformationCard {...inforCard} />}
              {!!stormPrepareBody && (
                <RichText
                  className={styles.stormPrepareBody}
                  text={stormPrepareBody}
                />
              )}
            </div>
            {!!stormChecklist?.[0].stormChecklistLinks?.length && (
              <div className={styles.stormChecklistWrapper}>
                <StormChecklist
                  stormChecklistTitle={stormChecklist[0].stormChecklistTitle}
                  stormChecklistSubtitle={
                    stormChecklist[0].stormChecklistSubtitle
                  }
                  stormChecklistLinks={stormChecklist[0].stormChecklistLinks}
                />
              </div>
            )}
          </>
        )}
      </ComponentLayout>
      {components?.length &&
        components.map((comp, i) =>
          renderComponent({
            data: comp,
            id: i,
            pageContainer: __typename,
          })
        )}
    </Layout>
  )
}
