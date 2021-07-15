import { Button, CardActions } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { lazy } from "react";

import IGalleryRecord from "../../models/gallery-record";
import galleryRecordStyles from "./GalleryRecordStyles";

const Card = lazy(() => import("@material-ui/core/Card"));
const CardContent = lazy(() => import("@material-ui/core/CardContent"));
const CardMedia = lazy(() => import("@material-ui/core/CardMedia"));
const Typography = lazy(() => import("@material-ui/core/Typography"));

const GalleryRecord = (props: { record: IGalleryRecord }) => {
  const [recordLikes, setRecordLikes] = useState(props.record.liked);

  const classes = galleryRecordStyles();

  const extractUsername = (username: string): string => {
    const test = /(?<=.*")(.*)(?=")/gm;

    return test.exec(username)![0];
  };

  const modifyTitle = (title: string): string => {
    if (!title) return "Untitled";

    const _title = title.trim();

    if (!_title.length) return "Untitled";

    return title;
  };

  const addLike = (): void => setRecordLikes(recordLikes + 1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.record.media.m}
        title={props.record.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" className={classes.topography}>
          <a href={props.record.link} className={classes.title}>
            {modifyTitle(props.record.title)}
          </a>
        </Typography>
        <Typography gutterBottom variant="h6" className={classes.topography}>
          by{" "}
          <a href={`https://www.flickr.com/photos/${props.record.author_id}`}>
            {extractUsername(props.record.author)}
          </a>
        </Typography>
        <Typography gutterBottom className={classes.likes}>
          Likes: {recordLikes}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.description}
        >
          Some Description
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.tags}
        >
          {props.record.tags}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="medium" onClick={addLike}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default GalleryRecord;
