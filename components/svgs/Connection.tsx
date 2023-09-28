import { BaseIconProps } from '_types/local'

const Connection = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      data-size={size}
      data-flip={flip}
      fill="none"
    >
      <path
        d="M12.9663 1.99138L22.0087 11.0338C22.1167 11.1403 22.2026 11.2671 22.2616 11.4068C22.3206 11.5465 22.3515 11.6965 22.3525 11.8481C22.3536 11.9998 22.3247 12.1502 22.2676 12.2907C22.2105 12.4312 22.1263 12.5591 22.0198 12.667L19.9922 14.6946C19.3594 15.3252 18.5875 15.7984 17.7385 16.0762C16.8896 16.354 15.9872 16.4287 15.1041 16.2942C14.217 16.1508 13.3087 16.2161 12.4513 16.4849C11.5939 16.7538 10.8109 17.2188 10.1646 17.8431L8.94805 19.0597C8.84009 19.1662 8.7122 19.2504 8.5717 19.3075C8.43119 19.3646 8.28082 19.3934 8.12916 19.3924C7.97751 19.3914 7.82754 19.3605 7.68782 19.3015C7.5481 19.2425 7.42137 19.1566 7.31487 19.0486L4.95149 16.6852C4.84352 16.5787 4.75759 16.452 4.6986 16.3123C4.63961 16.1726 4.60872 16.0226 4.60769 15.8709C4.60667 15.7193 4.63552 15.5689 4.69261 15.4284C4.7497 15.2879 4.83391 15.16 4.94043 15.0521L6.15698 13.8355C6.78126 13.1892 7.2463 12.4062 7.51517 11.5488C7.78404 10.6914 7.84934 9.78307 7.7059 8.89599C7.57152 8.01291 7.64623 7.11061 7.92404 6.26165C8.20186 5.4127 8.67501 4.64078 9.30545 4.00797L11.3331 1.98033C11.5512 1.7653 11.8457 1.64568 12.152 1.64775C12.4582 1.64982 12.7511 1.77342 12.9663 1.99138V1.99138Z"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M14.8159 3.84103L17.9069 0.75"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M20.1589 9.1842L23.25 6.09318"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M17.4873 6.51261L21.4949 2.505"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M14.1479 12.524C13.8837 12.7881 13.5471 12.9678 13.1807 13.0406C12.8143 13.1134 12.4345 13.0759 12.0894 12.9329C11.7443 12.7899 11.4494 12.5478 11.2419 12.2372C11.0343 11.9266 10.9236 11.5614 10.9236 11.1878C10.9236 10.8143 11.0343 10.4491 11.2419 10.1385C11.4494 9.82787 11.7443 9.58574 12.0894 9.44274C12.4345 9.29973 12.8143 9.26225 13.1807 9.33504C13.5471 9.40783 13.8837 9.58762 14.1479 9.85169C14.5023 10.2061 14.7014 10.6867 14.7014 11.1878C14.7014 11.689 14.5023 12.1696 14.1479 12.524V12.524Z"
        {...(baseColour && { stroke: '#758BFD' })}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M5.85633 18.1437L0.75 23.25"
        {...(baseColour && { stroke: '#27187E' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Connection