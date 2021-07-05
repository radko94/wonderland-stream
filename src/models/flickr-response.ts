import IGalleryRecord from "./gallery-record";

export default interface IFlickrResponse {
  description: string;
  generator: string;
  items: IGalleryRecord[];
  link: string;
  modified: string;
  title: string;
}
