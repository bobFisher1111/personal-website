import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const StoriesComponentTabData = (
  turOnAuthorForArticle: boolean,
  articleSectionFilter: any,
  articleShortStoriesFilter: any,
) => {
  return (
    [
      { 
        name: 'Stories',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleSectionFilter} />
      },
      { 
        name: 'Short Stories',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleShortStoriesFilter}/>
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Stories'}/>
      },
    ]
  );
};

export default StoriesComponentTabData;
