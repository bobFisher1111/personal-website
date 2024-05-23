import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const ReviewsComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleModernReviewsFilter: any,
  articleRetroReviewsFilter: any,
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
        data: <ArticleList authorData={authorsData} data={articleModernReviewsFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Retro',
        data: <ArticleList authorData={authorsData} data={articleRetroReviewsFilter} turOnAuthorForArticle={turOnAuthorForArticle} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Reviews'}/>
      },
    ]
  );
};

export default ReviewsComponentTabData;
