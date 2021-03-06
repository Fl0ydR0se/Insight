import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const cardStyles = {
    WebkitBoxShadow: "6px 7px 36px 1px rgba(0,0,0,0.41)",
    MozBoxShadow: "6px 7px 36px 1px rgba(0,0,0,0.41)",
    BoxShadow: "6px 7px 36px 1px rgba(0,0,0,0.41)"
};

export class CourseCard extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    shareCourse = () => {
        if (navigator && navigator.share) {

            const { course: { title, description } } = this.props;

            navigator.share({
                title: title,
                text: description.substring(0, 255),
                url: window.location.href
            }).then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing:', error));
        }
    }

    render() {
        const { course: { logo, title, description } } = this.props;

        return (
            <Card style={cardStyles}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe">{logo}</Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share" onClick={this.shareCourse}>
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more">
                        {
                            this.state.expanded ?
                                <ExpandLess /> :
                                <ExpandMore />
                        }
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
</Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
</Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                            to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                            cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
</Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}