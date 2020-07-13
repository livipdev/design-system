import React from 'react';
import PropTypes from 'prop-types';

import MUIDialog from '@material-ui/core/Dialog';
import MUIDialogContent from '@material-ui/core/DialogContent';

import Box from '../Box';
import Typography from '../Typography';
import CloseIcon from './CloseIcon.js';

const Dialog = ({ classes, onClose, title, subtitle, children, ...props }) => (
  <MUIDialog {...props} className={classes.dialog} onClose={onClose}>
    <Box p={4} className={classes.header} textAlign="center">
      <Typography variant="h3" message={title} />
      {subtitle && <Typography message={subtitle} />}
      {onClose ? (
        <Box className={classes.close} onClick={onClose}>
          <CloseIcon />
        </Box>
      ) : null}
    </Box>
    <MUIDialogContent className={classes.content}>
      {children}
    </MUIDialogContent>
  </MUIDialog>
);

Dialog.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any,
  onClose: PropTypes.any,
  title: PropTypes.any,
  subtitle: PropTypes.any,
};

export default Dialog;
