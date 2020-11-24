import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ReactPlayer from "react-player";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";
import { CardContent, Collapse } from "@material-ui/core";
export default function Player() {
  const [expanded, setExpanded] = useState(false);
  const useStyles = makeStyles((theme) => ({
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();

  return (
    <div className="conteiner">
      <Card className="card-player">
        <CardActions className="card-action">
          <Typography variant="body1" color="white">
            Corridas ao vivo
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon className="butum-expasion" />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className="conteiner-video">
              <div className="item-player">
                <ReactPlayer
                  url="https://betamg-i.akamaihd.net/hls/live/513429/willhill/citywalkfeed/playlist.m3u8"
                  controls
                  muted={true}
                  playing
                />
              </div>
              <div className="item-player">
                <ReactPlayer
                  url="https://betamg-i.akamaihd.net/hls/live/513429/willhill/citywalkfeed/playlist.m3u8"
                  controls
                  muted={true}
                  playing
                />
              </div>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
