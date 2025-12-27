import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';
import Works from '../works/Works';

const AuthorComponetTabData = (
  authorsData: any,
  data: any,
  authorName: any,
  getBooks?: any,
  seriesForAuthorsPage?: boolean,
) => {
  return (
    [
      { 
        name: 'Uploads',
        data: <ArticleList authorData={authorsData} data={data} turOnAuthorForArticle={false} />
      },
      { 
        name: 'Series',
        data: 
          <Series 
            data={data}
            name={authorName}
            seriesForAuthorsPage={seriesForAuthorsPage} // this is next part going to work on
          />
      },
      { 
        name: 'Other',
        data:   
          <Works
            bookData={getBooks}
          />
      },
    ]
  );
};

export default AuthorComponetTabData;
