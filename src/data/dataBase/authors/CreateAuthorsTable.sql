CREATE TABLE Authors (
	authorId int NOT NULL PRIMARY KEY,
    authorName varchar(255) NOT NULL,
    avatarImage varchar(255) NOT NULL,
    biography VARCHAR(MAX) NOT NULL,
    titles varchar(255) NOT NULL,
    facebook varchar(255) NOT NULL,
	twitter varchar(255) NOT NULL,
    youtube varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    about VARCHAR(MAX) NOT NULL,
);