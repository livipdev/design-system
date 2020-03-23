const logotypeProps = {
  xs: 1,
  justify: 'center',
  alignItems: 'center',
};

const menuProps = {
  xs: 6,
  justify: 'center',
  alignItems: 'center',
};

const buttonsProps = {
  xs: 3,
  justify: 'flex-end',
  alignItems: 'center',
};

const childrenProps = {
  logotype: logotypeProps,
  menu: menuProps,
  buttons: buttonsProps,
};

const defaultProps = {
  children: childrenProps,
  justify: 'center',
  alignItems: 'center',
};

export default defaultProps;
