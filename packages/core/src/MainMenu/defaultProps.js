import { MAIN_MENU_ITEMS, MAIN_MENU_ORDERED } from './constants';

const logotypeProps = {
  xs: 1,
  justify: 'center',
  alignItems: 'center',
};

const menuProps = {
  xs: 6,
  justify: 'center',
  alignItems: 'center',
  items: MAIN_MENU_ORDERED,
  hashmap: MAIN_MENU_ITEMS,
};

const buttonsProps = {
  xs: 3,
  justify: 'flex-end',
  alignItems: 'center',
}

const itemsProps = {
  logotype: logotypeProps,
  menu: menuProps,
  buttons: buttonsProps,
};

const defaultProps = {
  items: itemsProps,
  justify: 'center',
  alignItems: 'center',
};

export default defaultProps;
