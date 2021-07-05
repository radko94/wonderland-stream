import React from "react";
import loadingStyles from "./LoadingSkeletonStyles";

import Skeleton from "@material-ui/lab/Skeleton";

const LoadingSkeleton = () => {
  const classes = loadingStyles();

  return (
    <main className={classes.root}>
      {new Array(18).fill({}).map((entry) => (
        <section className={classes.section}>
          <Skeleton variant="rect" width="100%" className={classes.skeleton}>
            <div style={{ paddingTop: "100%" }} />
          </Skeleton>
        </section>
      ))}
    </main>
  );
};

export default LoadingSkeleton;
