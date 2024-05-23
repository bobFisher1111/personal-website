import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const HomePageComponentTabData = (
  authorsData: any,
  data: any,
  turOnAuthorForArticle: boolean,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={data} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Series',
        data: <Series data={data} homePage={true}/>
      },
    ]
  );
};

export default HomePageComponentTabData;
