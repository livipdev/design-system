import React from 'react';
import MuiGrid from '@material-ui/core/Grid';

const Grid = (props, ref) => <MuiGrid ref={ref} {...props} />;

Grid.propTypes = MuiGrid.propTypes;

export default React.forwardRef(Grid);
