import { makeStyles } from "@material-ui/core/styles";

const galleryRecordStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 363,
    margin: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    "@media (max-width: 450px)": {
      maxWidth: 260,
      minWidth: 260,
    },
  },
  media: {
    height: 140,
  },
  topography: {
    fontFamily: "Alfa Slab One",
  },
  likes: {
    fontFamily: "Alfa Slab One",
    color: "rgba(0, 0, 0, 0.74)",
  },
  description: {
    margin: "15px 0",
    fontFamily: "Alfa Slab One",
  },
  title: {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    fontFamily: "Alfa Slab One",
  },
  tags: {
    // letterSpacing: '2px',
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    fontFamily: "Alfa Slab One",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
export default galleryRecordStyles;
