import { seriesInfo } from './seriesInfo';

export type Articles = {
  articalId: number;
  section: string;
  authorId: number;
  articalTitle: string;
  articalSubTitle: string;
  publishedDate: string;
  numberOfFavorites: number;
  series: boolean;
  seriesInfo?: seriesInfo[],
  useVideoInsteadOfImage: boolean,
  headerImageOrVideo: string;
  artical: string[];
  sectionLink: string;
}
  