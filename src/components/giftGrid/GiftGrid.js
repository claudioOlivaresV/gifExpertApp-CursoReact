import React, { useEffect, useState } from 'react'
import { GiftGridItem } from '../giftGridItem/GiftGridItem';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


export const GiftGrid = ({ category }) => {
    const classes = useStyles();
    const apiKey = 'sTxFy5PL8vVzH21aFAGCkzd871IAQfLN';
    const url = 'https://api.giphy.com/v1/gifs/search?q=' + category + '&limit=6&api_key=' + apiKey;

    useEffect(() => {
        getGifs();
    }, [])

    const [imges, setimges] = useState([])

    const getGifs = async () => {
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium
            }
        })
        console.log(gifs);
        setimges(gifs)

    }
    // getGifs()
    return (
        < >
            <h3>{category}</h3>
            <div className={classes.root}>
                <GridList cols={2.5} className={classes.gridList}>
                  
                    {
                        imges.map((img) => (
                            <GiftGridItem key={img.id} {...img} />
                        ))
                    }

                    {/* <h3>{category}</h3> */}
                    {/* <div className="row">
                        {
                            imges.map((img) => (
                                <GiftGridItem key={img.id} {...img} />
                            ))
                        }

                    </div> */}
                </GridList>

            </div>



        </>
    )
}








{/* export default function TitlebarGridList() {
  

  return (
   
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
} */}