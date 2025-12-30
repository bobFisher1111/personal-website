import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const CodingComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleFrontEndFilter: any,
  articleDataFilter: any,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={articleSectionFilter} />
      },
      { 
        name: 'Coding',
        data: <ArticleList authorData={authorsData} data={articleFrontEndFilter} />
      },
      { 
        name: 'Game Dev',
        data: <ArticleList authorData={authorsData} data={articleDataFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Coding'} />
      },
    ]
  );
};

export default CodingComponentTabData;
