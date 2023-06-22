import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";
import Works from '../works/Works';
import AuthorAbout from './AuthorAbout';

const AuthorComponetTabData = (
  turOnAuthorForArtical: boolean,
  data: any,
  authorName: any,
  authorsPage: boolean,
  turOnArticalPage: boolean,
  getBooks?: any,
  authorData?: any,
) => {
  return (
    [
      { 
        name: 'Writings',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} />
      },
      { 
        name: 'Books',
        data:   
          <Works
            authorsPage={turOnArticalPage}
            bookData={getBooks}
          />
      },
      { 
        name: 'About',
        data: 
          <AuthorAbout
            turnPaddingOn={authorsPage}
            aboutData={authorData}
        />
      },
    ]
  )
}

export default AuthorComponetTabData;
