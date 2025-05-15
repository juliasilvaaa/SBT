import { IHost } from "./host";
import { StrapiImage, StrapiResponse } from "./strapi";

export interface IPodcast {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hour_podcast: string;
  image_cover: StrapiImage;
  apresentadores_podcast: IHost[]
}

export interface IPodcastResponse extends StrapiResponse {
data: IPodcast[]
}
