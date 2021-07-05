import { makeStyles } from "@material-ui/core";

const loadingStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100vh",
    overflow: "hidden",
  },
  section: {
    flexBasis: "20%",
    margin: "25px",
  },
  skeleton: {
    borderRadius: '20px'
  },
  image: {
    width: "100%",
  },
}));
export default loadingStyles;
