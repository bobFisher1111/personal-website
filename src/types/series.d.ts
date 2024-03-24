export interface SeriesInfo {
  seriesTitle: string,
  seriesId: string,
  seriesChapter: number,
  seriesPublishDate: string
};

export interface SeriesInfo2 {
  seriesId: number,
	seriesTitle: string,
	seriesCoverImageOrVideo: string,
	seriesAuthors: string,
	useVideoInsteadOfImage: boolean,
	seriesType: string,
	seriesTypeTitle: string,
	seriesStartDate: date, 
	section: string,
  authorid: number,
	sectionLink: string
};