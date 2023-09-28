type SelectStylesType = (
  isValid: boolean,
  isG81?: boolean,
  isPowerCut?: boolean
) => any

export const SelectStyles: SelectStylesType = (
  isValid,
  isG81 = false,
  isPowerCut = false
) => {
  const setErrorState = (
    baseCondition: object | boolean,
    values: Array<string>
  ) => {
    return baseCondition ? values[0] : isValid ? values[1] : values[2]
  }

  const borderColor = isG81 ? '#118483' : '#30354a'
  const borderWidth = isG81 ? '2px' : '1px'
  const borderRadius = isPowerCut ? '25px' : '5px'

  return {
    menu: (provided: object, state: any) => ({
      ...provided,
      border: isG81 ? 'solid #118483' : 'solid #30354a',
      borderWidth: `0 ${borderWidth} ${borderWidth} ${borderWidth}`,
      marginTop: 0,
      padding: '0',
      borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
    }),
    option: (provided: object, state: any) => {
      return {
        ...provided,
        backgroundColor: state.isFocused ? '#f2f2f2' : 'transparent',
        color: '#757575',
        padding: '15px',
        position: `relative`,
        opacity: state.isDisabled ? '0.5' : '1',

        '&:active': {
          backgroundColor: '#f2f2f2',
        },

        '&:before': state.isSelected && {
          backgroundImage: `url('/icons/icon_tick_circle.svg')`,
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          content: `""`,
          width: '20px',
          height: '20px',
        },
      }
    },
    control: (provided: object, state: any) => ({
      ...provided,
      borderWidth: setErrorState(state.menuIsOpen, [
        `${borderWidth} ${borderWidth} 1px ${borderWidth}`,
        '2px',
        '1px',
      ]),
      boxShadow: 'none',
      padding: '7px',
      borderColor: setErrorState(state.menuIsOpen, [
        borderColor,
        '#e13000',
        '#bdbdbd',
      ]),

      borderRadius: state.menuIsOpen
        ? `${borderRadius} ${borderRadius} 0 0`
        : borderRadius,
      '&:hover': {
        borderColor: state.menuIsOpen ? borderColor : '#bdbdbd',
        borderWidth: `${borderWidth} ${borderWidth} 1px ${borderWidth}`,
      },
    }),
    indicatorSeparator: () => ({
      width: 0,
    }),
    indicatorsContainer: (provided: object, state: any) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen
        ? 'rotate(180deg)'
        : 'rotate(0deg)',
    }),
    singleValue: () => ({
      color: '#30354a',
      fontSize: '18px',
    }),
    placeholder: () => ({
      color: '#757575',
      fontSize: '18px',
    }),
  }
}
