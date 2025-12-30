import ArticleList from 'src/components/articleList/ArticleList';
import Series from 'src/components/seriesComponent/Series';

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
