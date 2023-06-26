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
  seriesForArticalPage?: boolean,
  // articalPage?: boolean,
) => {
  return (
    [
      { 
        name: 'Writings',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} articalPage={seriesForArticalPage}/>
      },
      { 
        name: 'Books',
        data:   
          <Works
            authorsPage={turOnArticalPage}
            bookData={getBooks}
            articalPage={true}
          />
      },
      { 
        name: 'About',
        data: 
          <AuthorAbout
            turnPaddingOn={authorsPage}
            aboutData={authorData}
            bookData={getBooks}
        />
      },
    ]
  )
}

export default AuthorComponetTabData;
