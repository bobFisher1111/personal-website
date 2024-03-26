import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const VideoGamesComponentTabData = (
  turOnAuthorForArticle: boolean,
  articleSectionFilter: any,
  articleModernFilter: any,
  articleRetroFilter: any,
) => {
  return (
    [
      { 
        name: 'Articles',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleSectionFilter} />
      },
      { 
        name: 'Modern',
        data:<ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleModernFilter} />
      },
      { 
        name: 'Retro',
        data:<ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleRetroFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Video Games'} />
      },
    ]
  );
};

export default VideoGamesComponentTabData;
