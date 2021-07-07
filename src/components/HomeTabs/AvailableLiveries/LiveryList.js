import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import GridItem from './GirdItem';

import GetIndexOfLiveryInArray from '../../../helpers/GetIndexOfLiveryInArray';

export default function LiveryList(props) {
  const { liveries, AddSelectedLivery, RemoveSelectedLivery, disabled, installedLiveries, selectedLiveries } = props;

  function RenderGridItem(livery) {
    const [index, msg] = GetIndexOfLiveryInArray(livery, installedLiveries);

    return (
      <GridItem
        key={`${livery.fileName}__${livery.checkSum}`}
        livery={livery}
        AddSelectedLivery={AddSelectedLivery}
        RemoveSelectedLivery={RemoveSelectedLivery}
        disabled={disabled}
        isInstalled={index !== -1}
        isSelected={GetIndexOfLiveryInArray(livery, selectedLiveries)[0] !== -1}
        updateAvailable={msg === 'differentHash'}
      />
    ); 
  }

  return (
    <Grid container>
      {liveries.map(livery => RenderGridItem(livery))}
    </Grid>
  );
}

LiveryList.propTypes = {
  liveries: PropTypes.arrayOf(
    PropTypes.shape({
      airplane: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      generation: PropTypes.string.isRequired,
      metaGeneration: PropTypes.string.isRequired,
      lastModified: PropTypes.string.isRequired,
      ETag: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      checkSum: PropTypes.string.isRequired,
      image: PropTypes.string,
      smallImage: PropTypes.string,
    }).isRequired
  ).isRequired,
  installedLiveries: PropTypes.arrayOf(
    PropTypes.shape({
      airplane: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      generation: PropTypes.string.isRequired,
      metaGeneration: PropTypes.string.isRequired,
      lastModified: PropTypes.string.isRequired,
      ETag: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      checkSum: PropTypes.string.isRequired,
      image: PropTypes.string,
      smallImage: PropTypes.string,
    }).isRequired
  ).isRequired,
  selectedLiveries: PropTypes.arrayOf(
    PropTypes.shape({
      airplane: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      generation: PropTypes.string.isRequired,
      metaGeneration: PropTypes.string.isRequired,
      lastModified: PropTypes.string.isRequired,
      ETag: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      checkSum: PropTypes.string.isRequired,
      image: PropTypes.string,
      smallImage: PropTypes.string,
    }).isRequired
  ).isRequired,
  AddSelectedLivery: PropTypes.func.isRequired,
  RemoveSelectedLivery: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
