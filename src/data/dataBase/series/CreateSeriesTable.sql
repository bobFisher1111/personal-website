CREATE TABLE Series (
	seriesId int NOT NULL PRIMARY KEY,
	seriesTitle varchar(255) NOT NULL,
	seriesCoverImageOrVideo varchar(255) NOT NULL,
	seriesAuthors varchar(255) NOT NULL,
	useVideoInsteadOfImage bit NOT NULL,
	seriesType varchar(255) NOT NULL,
	seriesTypeTitle varchar(255) NOT NULL,
	seriesStartDate date NOT NULL, 
	section varchar(255) NOT NULL,
	authorId int FOREIGN KEY REFERENCES Authors(authorId),
	sectionLink varchar(255) NOT NULL
);