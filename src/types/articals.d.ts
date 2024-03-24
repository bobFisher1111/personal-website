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

export type Articles2 = {
	articalId: number,
	authorid: number,
	seriesId: number,
  sections: string,
  sectionLink: string,
  sectionType: string,
	articalTitle: string,
  articalSubTitle: string,
  publishedDate: date,
  numberOfFavorites: number,
  series: boolean,
  seriesChapter: number,
  seriesType: string,
  useVideoInsteadOfImage: boolean,
  coverImageOrVideo: string,
  artical: string,
};
  