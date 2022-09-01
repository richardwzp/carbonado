import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './baseCard.css';

const BaseCard = ({title, description, image, imageAlt, minHeight}:
                      {title: string, description: string, image: any, imageAlt: string, minHeight?: number}) => {
    const style: any = {
    }
    if (minHeight) {
        style.minHeight = minHeight;
    }

    return (
        <Card className="cardContainer" style={style}>
            <CardMedia
                component="img"
                image={image}
                alt={imageAlt}
                style={style}
            />

            <div className="contentContainer">
                <CardContent className="innerText">
                    <Typography gutterBottom variant="h5" component="div" color={"common.white"}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="common.white">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Share</Button> */}
                    <Button size="small" style={{color: "#FFFFFF"}}>Learn More</Button>
                </CardActions>
            </div>
        </Card>
    );
}

export default BaseCard;