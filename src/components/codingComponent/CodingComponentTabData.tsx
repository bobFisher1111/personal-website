import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const CodingComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleFrontEndFilter: any,
  articleDataFilter: any,
  turOnAuthorForArticle: boolean,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={articleSectionFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Coding',
        data: <ArticleList authorData={authorsData} data={articleFrontEndFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Game Dev',
        data: <ArticleList authorData={authorsData} data={articleDataFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Coding'} />
      },
    ]
  );
};

export default CodingComponentTabData;
