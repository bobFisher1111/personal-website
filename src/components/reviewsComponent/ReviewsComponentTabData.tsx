import React from 'react';
import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const ReviewsComponentTabData = (
  turOnAuthorForArticle: boolean,
  articleSectionFilter: any,
  articleModernReviewsFilter: any,
  articleRetroReviewsFilter: any,
) => {
  return (
    [
      { 
        name: 'All Reviews',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleSectionFilter} />
      },
      { 
        name: 'Modern',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleModernReviewsFilter} />
      },
      { 
        name: 'Retro',
        data: <ArticleList turOnAuthorForArticle={turOnAuthorForArticle} data={articleRetroReviewsFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Reviews'}/>
      },
    ]
  );
};

export default ReviewsComponentTabData;
