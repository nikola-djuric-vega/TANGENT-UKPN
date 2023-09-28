import { GroupTypeBase, Styles } from 'react-select'

export const SelectStyles:
  | Partial<Styles<object, false, GroupTypeBase<object>>>
  | undefined = {
  menu: (provided: object, state: any) => ({
    ...provided,
    border: 'solid #bdbdbd',
    borderWidth: '0 1px 1px 1px',
    marginTop: 0,
    padding: '0',
    borderRadius: '0 0 5px 5px',
  }),
  option: (provided: object, state: any) => {
    return {
      ...provided,
      backgroundColor: state.isFocused ? '#f2f2f2' : 'transparent',
      paddingLeft: '68px',
      color: '#757575',
      padding: '15px',
      position: 'relative',
      fontSize: '18px',

      '&:active': {
        backgroundColor: '#f2f2f2',
      },

      '&:hover': {
        '&:before': {
          backgroundImage: `url('/icons/icon_tick_circle.svg')`,
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          content: `""`,
          width: '20px',
          height: '20px',
          color: '#18c7c5',
        },
      },
    }
  },
  control: (provided: object, state: any) => ({
    ...provided,
    boxShadow: 'none',
    padding: '7px',
    marginBottom: '16px',
    borderRadius: state.menuIsOpen ? '5px 5px 0 0' : '5px',
    '&:hover': {
      borderColor: '#bdbdbd',
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
      color: '#757575',
    },
  }),
  singleValue: () => ({
    color: '#6F727F',
    fontSize: '16px',
  }),
  placeholder: () => ({
    fontSize: '16px',
    color: '#6F727F',
  }),
}
