import ArticleList from '../articleList/ArticleList';
import Series from '../seriesComponent/Series';

const VideoGamesComponentTabData = (
  authorsData: any,
  articleSectionFilter: any,
  articleModernFilter: any,
  articleRetroFilter: any,
) => {
  return (
    [
      { 
        name: 'Latest',
        data: <ArticleList authorData={authorsData} data={articleSectionFilter} />
      },
      { 
        name: 'Modern',
        data:<ArticleList authorData={authorsData} data={articleModernFilter} />
      },
      { 
        name: 'Retro',
        data:<ArticleList authorData={authorsData} data={articleRetroFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articleSectionFilter} section={'Video Games'} />
      },
    ]
  );
};

export default VideoGamesComponentTabData;
