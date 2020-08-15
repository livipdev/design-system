import React from 'react';

import GridList from '../GridList';
import GridListTile from '../GridListTile';
import SimpleCard from '../SimpleCard';
import {
  useTheme,
  useWidth,
} from '../styles';

import {
  selectColsBasedOnViewport,
  selectSpaceBasedOnViewport,
} from './selectors';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const SimpleCardList = ({
  classes,
  contents,
  columns,
  italicDescription
}) => {
  const theme = useTheme();
  const viewport = useWidth();
  const spacing = selectSpaceBasedOnViewport(theme, viewport);
  const cols = selectColsBasedOnViewport(columns, viewport)

  return (
    <GridList
      cols={cols}
      spacing={spacing}
      cellHeight='auto'
    >
      {
        contents.map((content) => (
          <GridListTile key={content.id}>
            <SimpleCard
              content={content}
              italicDescription={italicDescription}
            />
          </GridListTile>
        ))
      }
    </GridList>
  );
};

SimpleCardList.propTypes = propTypes;
SimpleCardList.defaultProps = defaultProps;

export default SimpleCardList;
