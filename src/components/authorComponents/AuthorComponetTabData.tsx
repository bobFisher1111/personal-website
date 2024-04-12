import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';
import Works from '../works/Works';
// import AuthorAbout from './authorAbout/AuthorAbout';

const AuthorComponetTabData = (
  turOnAuthorForArticle: boolean,
  data: any,
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
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={data} />
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
      // { 
      //   name: 'About',
      //   data: 
      //     <AuthorAbout
      //       turnPaddingOn={authorsPage}
      //       aboutData={authorData}
      //       bookData={getBooks}
      //     />
      // },
    ]
  );
};

export default AuthorComponetTabData;
