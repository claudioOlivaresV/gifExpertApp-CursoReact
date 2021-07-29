import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({

    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export const GiftGridItem = ({id, title, url:{ url }}) => {
        const classes = useStyles();

    
    return (
        <GridListTile key={id}>
        <img src={url} alt={title} />
        <GridListTileBar
          title={title}
          actionIcon={
            <IconButton aria-label={`info about ${title}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    )

}

GiftGridItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.object.isRequired,
}
