import React from "react";
import jsonp from "fetch-jsonp";

const App = () => {
  jsonp(
    `https://api.flickr.com/services/feeds/photos_public.gne?format=json`,
    { jsonpCallback: "jsoncallback" }
  )
    .then((x) => x.json())
    .then((x) => console.log(x));

  return <h1>Radko</h1>;
};

export default App;
