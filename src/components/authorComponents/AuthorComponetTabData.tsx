import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';
import Works from '../works/Works';

const AuthorComponetTabData = (
  authorsData: any,
  data: any,
  turOnAuthorForArticle: boolean,
  authorName: any,
  authorsPage: boolean,
  turOnArticlePage: boolean,
  getBooks?: any,
  authorData?: any,
  seriesForArticlePage?: boolean,
  seriesForAuthorsPage?: boolean,
) => {

  return (
    [
      { 
        name: 'Uploads',
        data: <ArticleList authorData={authorsData} data={data} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Series',
        data: 
          <Series 
            data={data}
            articlePage={seriesForArticlePage}
            name={authorName}
            seriesForAuthorsPage={seriesForAuthorsPage}
          />
      },
      { 
        name: 'Other',
        data:   
          <Works
            authorsPage={turOnArticlePage}
            bookData={getBooks}
            articlePage={true}
          />
      },
    ]
  );
};

export default AuthorComponetTabData;
