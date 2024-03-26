import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const HomePageComponentTabData = (
  turOnAuthorForArticle: boolean,
  data: any
) => {
  return (
    [
      { 
        name: 'Articles',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} homePage={true}/>
      },
    ]
  );
};

export default HomePageComponentTabData;
