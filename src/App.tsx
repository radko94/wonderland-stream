import React, { useState, useEffect, lazy } from "react";
import jsonp from "fetch-jsonp";
import InfiniteScroll from "react-infinite-scroll-component";

import IFlickrResponse from "./models/flickr-response";
import IGalleryRecord from "./models/gallery-record";
import appStyles from "./AppStyles";

const GalleryRecord = lazy(
  () => import("./components/gallery-record/GalleryRecord")
);
const Header = lazy(() => import("./components/header/Header"));

const App = () => {
  const classes = appStyles();
  const [elements, setElements] = useState([] as IGalleryRecord[]);
  const [filteredElements, setFilteredElements] = useState(
    [] as IGalleryRecord[]
  );

  useEffect(() => fetchMoreData(), []);
  useEffect(() => setFilteredElements(elements), [elements]);

  const fetchMoreData = (): void => {
    jsonp(
      `https://api.flickr.com/services/feeds/photos_public.gne?format=json&safety_level=1`,
      {
        jsonpCallback: "jsoncallback",
      }
    )
      .then((flikrResponse) => flikrResponse.json())
      .then((flikrResponseJson: IFlickrResponse) => {

        const items: IGalleryRecord[] = flikrResponseJson.items;
        const modifiedItems = items.map(element => ({...element, liked: Math.floor(Math.random() * 100)}))
        setElements([...elements, ...modifiedItems]);
      });
  };

  const filterElements = (searchString: string): void =>
    setFilteredElements(
      elements.filter((element) =>
        element.tags.split(" ").some((tag) => tag.startsWith(searchString))
      )
    );

  return (
    <main>
      <Header filterFn={filterElements} />
      <InfiniteScroll
        className={classes.gallery}
        dataLength={elements.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        height={"93vh"}
      >
        {filteredElements.map((record, index) => (
          <GalleryRecord key={index} record={record} />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default App;
