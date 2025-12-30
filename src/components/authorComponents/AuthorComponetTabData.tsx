import ArticleList from 'src/components/articleList/ArticleList';
import Series from 'src/components/seriesComponent/Series';
import Works from 'src/components/works/Works';

const AuthorComponetTabData = (
  authorsData: any,
  data: any,
  authorName: any,
  getBooks?: any,
  seriesForAuthorsPage?: boolean,
) => {
  return (
    [
      { 
        name: 'Uploads',
        data: <ArticleList authorData={authorsData} data={data} />
      },
      { 
        name: 'Series',
        data: 
          <Series 
            data={data}
            name={authorName}
            seriesForAuthorsPage={seriesForAuthorsPage} // Keep this as I refactor, later remove this comment, this is needed here
          />
      },
      { 
        name: 'Other',
        data:   
          <Works
            bookData={getBooks}
          />
      },
    ]
  );
};

export default AuthorComponetTabData;
