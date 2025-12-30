import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const ReviewsComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleModernReviewsFilter: any,
  articleRetroReviewsFilter: any,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={articleSectionFilter} />
      },
      { 
        name: 'Modern',
        data: <ArticleList authorData={authorsData} data={articleModernReviewsFilter} />
      },
      { 
        name: 'Retro',
        data: <ArticleList authorData={authorsData} data={articleRetroReviewsFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Reviews'}/>
      },
    ]
  );
};

export default ReviewsComponentTabData;
