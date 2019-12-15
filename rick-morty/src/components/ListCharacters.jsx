import React, { useEffect } from "react";
import { connect } from "react-redux";

import { loadCharacters } from "../state/actionCreators";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";

import Grid from "@material-ui/core/Grid";
import { textAlign } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

export const ListCharacters = ({ characters, loadCharacters }) => {
	const classes = useStyles();

	useEffect(() => {
		console.log("get them");

		loadCharacters();
	}, []);
	return (
		<div>
			<Grid container spacing={1}>
				{characters.map(character => (
					<Grid item md={3} xs={12}>
						<Card
							className={classes.card}
							style={{ margin: "0 auto 50px auto" }}
						>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={character.image}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										{character.name}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										{character.status} - {character.species}{" "}
										- {character.gender}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="small"
									color="primary"
									variant="contained"
								>
									Share
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

// Step 8: Use "connect" to plug the component to redux
export default connect(state => state, { loadCharacters })(ListCharacters);
