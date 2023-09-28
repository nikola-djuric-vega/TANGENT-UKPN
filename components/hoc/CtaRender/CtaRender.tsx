import LightBoxVideoPlayer from '_molecules/LighboxVideoPlayer/LightboxVideoPlayer'
import { CTAButton } from '_types/CMS/nodes/components/UKPN/buttons/base'
import { ButtonAppearance, ButtonColors, LinkType } from '_types/CMS'
import Button from '_atoms/Button&Link/Button/Button'
import React, { useEffect, useState } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
export interface CtaRenderProps {
  cta: CTAButton
  className?: string
  color?: ButtonColors
  tabIndex?: number
}

const CtaRender = ({ color, className, tabIndex, cta }: CtaRenderProps) => {
  const [videoUrl, setVideoUrl] = useState<string>('')
  const colorValue = !!color ? color : ButtonColors.DARK

  useEffect(() => {
    if (!videoUrl) {
      document.body.classList.remove('modal-open')
    }
  }, [videoUrl])

  return cta.uRL ? (
    <>
      {cta.__typename !== ButtonAppearance.VIDEO ? (
        <Link
          download={cta.uRL.type === LinkType.MEDIA}
          appearance={cta.__typename}
          target={cta.uRL.target}
          className={className}
          tabIndex={tabIndex}
          url={cta.uRL.url}
          color={colorValue}
        >
          {cta.uRL.name}
        </Link>
      ) : (
        <>
          {videoUrl && (
            <LightBoxVideoPlayer url={videoUrl} setState={setVideoUrl} />
          )}
          <Button
            onClick={() => {
              document.body.classList.add('modal-open')
              !!cta.uRL && setVideoUrl(cta.uRL.url)
            }}
            appearance={cta.__typename as ButtonAppearance}
            className={className}
            color={colorValue}
          >
            {cta.uRL.name}
          </Button>
        </>
      )}
    </>
  ) : null
}

export default CtaRender
