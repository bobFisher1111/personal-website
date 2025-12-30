import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const StoriesComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleShortStoriesFilter: any,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={articleSectionFilter} />
      },
      { 
        name: 'Short Stories',
        data: <ArticleList authorData={authorsData} data={articleShortStoriesFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Stories'}/>
      },
    ]
  );
};

export default StoriesComponentTabData;
