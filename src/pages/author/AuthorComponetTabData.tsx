import ArticleList from 'src/components/articleList/ArticleList';
import SeriesComponent from 'src/components/seriesList/SeriesComponent';

const AuthorComponetTabData = (
  authorsData: any,
  data: any,
  getSeries?: any,
) => {
  return (
    [
      { 
        name: 'Uploads',
        data: <ArticleList authorData={authorsData} data={data} />
      },
      { 
        name: 'Series',
        data: (
          <SeriesComponent
            series={getSeries}
            layout="grid"
            outerSx={{ pt: 2 }}
          />
        )
      },
    ]
  );
};

export default AuthorComponetTabData;
