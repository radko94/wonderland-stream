import React, { Suspense } from "react";
import IGalleryRecord from "../../models/gallery-record";

import { render, cleanup, waitFor } from "@testing-library/react";

import GalleryRecord from "./GalleryRecord";

describe("Gallery record", () => {
  afterEach(cleanup);
  it("should be created", async () => {
    const record: IGalleryRecord = {
      title: "Formby & Crosby 30062021",
      link: "https://www.flickr.com/photos/43121659@N06/51291415182/",
      media: {
        m: "https://live.staticflickr.com/65535/51291415182_ea1ab0ebff_m.jpg",
      },
      date_taken: "2021-06-30T16:13:40-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/43121659@N06/">Pumpkin&#039;s Belly</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/43121659@N06/51291415182/" title="Formby &amp; Crosby 30062021"><img src="https://live.staticflickr.com/65535/51291415182_ea1ab0ebff_m.jpg" width="240" height="180" alt="Formby &amp; Crosby 30062021" /></a></p> ',
      published: "2021-07-05T18:55:27Z",
      author: 'nobody@flickr.com ("Pumpkin\'s Belly")',
      author_id: "43121659@N06",
      tags: "",
    };

    const component = render(
      <Suspense fallback={<h1>loading....</h1>}>
        <GalleryRecord record={record}></GalleryRecord>
      </Suspense>
    );

    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });
  });

  it("should have a title", async () => {
    const record: IGalleryRecord = {
      title: "Formby & Crosby 30062021",
      link: "https://www.flickr.com/photos/43121659@N06/51291415182/",
      media: {
        m: "https://live.staticflickr.com/65535/51291415182_ea1ab0ebff_m.jpg",
      },
      date_taken: "2021-06-30T16:13:40-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/43121659@N06/">Pumpkin&#039;s Belly</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/43121659@N06/51291415182/" title="Formby &amp; Crosby 30062021"><img src="https://live.staticflickr.com/65535/51291415182_ea1ab0ebff_m.jpg" width="240" height="180" alt="Formby &amp; Crosby 30062021" /></a></p> ',
      published: "2021-07-05T18:55:27Z",
      author: 'nobody@flickr.com ("Pumpkin\'s Belly")',
      author_id: "43121659@N06",
      tags: "",
    };

    const component = render(
      <Suspense fallback={<h1>loading....</h1>}>
        <GalleryRecord record={record}></GalleryRecord>
      </Suspense>
    );

    await waitFor(() => {
      expect(component.queryByText(record.title)).toBeInTheDocument();
    });
  });
});
