import React from 'react'
import PropTypes from 'prop-types';
import { GiftGridItem } from '../giftGridItem/GiftGridItem';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { useFetchGifs } from '../hooks/useFetchGifts';
import Spinner from '../spinner/Spinner';


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
    
    const { data, loading } = useFetchGifs(category)
    console.log(data, loading);

    return (
        < >
           
            <h3> {  category}</h3>
            { loading && <Spinner />}
            <div className={classes.root}>
                <GridList cols={2.5} className={classes.gridList}>
                  
                    {
                        data.map((img) => (
                            <GiftGridItem key={img.id} {...img} />
                        ))
                    }

                
                </GridList>

            </div>



        </>
    )
}

GiftGrid.prototype = {
    category: PropTypes.string.isRequired
}