import React, { lazy } from "react";

import headerStyles from "./HeaderStyles";

const SearchIcon = lazy(() => import("@material-ui/icons/Search"));
const AppBar = lazy(() => import("@material-ui/core/AppBar"));
const InputBase = lazy(() => import("@material-ui/core/InputBase"));
const Toolbar = lazy(() => import("@material-ui/core/Toolbar"));
const Typography = lazy(() => import("@material-ui/core/Typography"));

const Header = (props: {
  filterFn: (searchStr: string) => void;
}): JSX.Element => {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Wonderland Stream
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => props.filterFn(event.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
