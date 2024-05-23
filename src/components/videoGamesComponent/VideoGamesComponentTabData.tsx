import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const VideoGamesComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleModernFilter: any,
  articleRetroFilter: any,
  turOnAuthorForArticle: boolean,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={articleSectionFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Modern',
        data:<ArticleList authorData={authorsData} data={articleModernFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Retro',
        data:<ArticleList authorData={authorsData} data={articleRetroFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Video Games'} />
      },
    ]
  );
};

export default VideoGamesComponentTabData;
