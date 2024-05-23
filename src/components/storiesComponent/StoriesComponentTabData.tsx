import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const StoriesComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleShortStoriesFilter: any,
  turOnAuthorForArticle: boolean,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={articleSectionFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Short Stories',
        data: <ArticleList authorData={authorsData} data={articleShortStoriesFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Stories'}/>
      },
    ]
  );
};

export default StoriesComponentTabData;
