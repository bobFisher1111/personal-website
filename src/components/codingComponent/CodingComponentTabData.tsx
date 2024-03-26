import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const CodingComponentTabData = (
  turOnAuthorForArticle: boolean,
  articleSectionFilter: any,
  articleFrontEndFilter: any,
  articleDataFilter: any,
) => {
  return (
    [
      { 
        name: 'All Articles',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleSectionFilter} />
      },
      { 
        name: 'Full Stack',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleFrontEndFilter} />
      },
      { 
        name: 'Game Dev',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleDataFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Coding'} />
      },
    ]
  );
};

export default CodingComponentTabData;
