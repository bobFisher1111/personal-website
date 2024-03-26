export type Articles = {
  articleId: number;
  section: string;
  authorId: number;
  articleTitle: string;
  articleSubTitle: string;
  publishedDate: string;
  numberOfFavorites: number;
  series: boolean;
  seriesInfo?: seriesInfo[],
  useVideoInsteadOfImage: boolean,
  headerImageOrVideo: string;
  article: string[];
  sectionLink: string;
}

export type Articles2 = {
	articleId: number,
	authorid: number,
	seriesId: number,
  sections: string,
  sectionLink: string,
  sectionType: string,
	articleTitle: string,
  articleSubTitle: string,
  publishedDate: date,
  numberOfFavorites: number,
  series: boolean,
  seriesChapter: number,
  seriesType: string,
  useVideoInsteadOfImage: boolean,
  coverImageOrVideo: string,
  article: string,
};
  