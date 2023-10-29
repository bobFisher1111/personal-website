import React from 'react';
import ArticalsList from '../articalTabs/ArticalsList';
import Series from '../seriesComponent/Series';
import Works from '../works/Works';
import AuthorAbout from './authorAbout/AuthorAbout';

const AuthorComponetTabData = (
  turOnAuthorForArtical: boolean,
  data: any,
  authorName: any,
  authorsPage: boolean,
  turOnArticalPage: boolean,
  getBooks?: any,
  authorData?: any,
  seriesForArticalPage?: boolean,
  seriesForAuthorsPage?: boolean,
) => {

  return (
    [
      { 
        name: 'Writings',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: 
          <Series 
            data={data}
            articalPage={seriesForArticalPage}
            name={authorName}
            seriesForAuthorsPage={seriesForAuthorsPage}
          />
      },
      { 
        name: 'Books',
        data:   
          <Works
            authorsPage={turOnArticalPage}
            bookData={getBooks}
            articalPage={true}
          />
      },
      { 
        name: 'About',
        data: 
          <AuthorAbout
            turnPaddingOn={authorsPage}
            aboutData={authorData}
            bookData={getBooks}
          />
      },
    ]
  );
};

export default AuthorComponetTabData;
