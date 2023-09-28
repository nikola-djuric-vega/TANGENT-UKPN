import { GroupTypeBase, Styles } from 'react-select'

export const SelectStylesFilter:
  | Partial<Styles<object, false, GroupTypeBase<object>>>
  | undefined = {
  menu: (provided: object, state: any) => ({
    ...provided,
    border: 'solid #E0E0E0',
    borderWidth: '1px 1px 1px 1px',
    padding: '8px 0 8px 0',
    borderRadius: '4px',
    boxShadow: 'none',
  }),
  option: (provided: object, state: any) => {
    return {
      ...provided,
      backgroundColor: state.isFocused ? '#F5F7FB' : 'transparent',
      color: '#464A5E',
      padding: '15px',
      position: 'relative',
      fontSize: '18px',
      borderRadius: '100px',
      margin: '0px 8px 0px 8px',
      width: 'calc(100% - 16px)',
      '&:active': {
        backgroundColor: '#F5F7FB',
      },

      '&:hover': {
        cursor: 'pointer',

        '&:before': {
          backgroundImage: `url('/icons/icon_option_tick.svg')`,
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          content: `""`,
          width: '20px',
          height: '20px',
        },
      },
    }
  },
  control: (provided: object, state: any) => ({
    ...provided,
    boxShadow: 'none',
    height: '56px',
    padding: '7px',
    borderRadius: '4px',
    border: state.menuIsOpen ? '1px solid #27187E' : '1px solid #E0E0E0',
    '&:hover': {
      borderColor: '#E0E0E0',
      borderWidth: '1px',
    },
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
  indicatorsContainer: (provided: object, state: any) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    '& svg': {
      color: '#313548',
    },
  }),
  singleValue: () => ({
    color: '#313548',
    fontSize: '16px',
    lineHeight: '26px',
    position: 'absolute',
    bottom: '5px',
    left: '16px',
  }),
  placeholder: () => ({
    fontSize: '16px',
    color: '#313548',
    position: 'absolute',
    bottom: '5px',
    left: '16px',
    lineHeight: '26px',
  }),
  valueContainer: () => ({
    height: '100%',
  }),
}
