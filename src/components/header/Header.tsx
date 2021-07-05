import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { Search as SearchIcon, Menu as MenuIcon } from "@material-ui/icons";

import headerStyles from "./HeaderStyles";

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
