import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Typography from '../Typography';

const FooterAddress = ({ classes }) => (
  <Box py={2}>
    <Typography className={classes.address}>
      A Livip é uma marca da Engage Projetos de Esporte e Entretenimento LTDA.
    </Typography>

    <Typography className={classes.address}>
      Avenida Pedroso de Morais, 271, 10º andar, Pinheiros, São Paulo, Brasil. 
    </Typography>

    <Typography className={classes.address}>
      Livip © Copyright 2020.
    </Typography>
  </Box>
);

FooterAddress.propTypes = {
  classes: PropTypes.shape({
    address: PropTypes.string,
  }),
};

export default FooterAddress;
