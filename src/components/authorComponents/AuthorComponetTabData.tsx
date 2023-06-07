import ArticalsList from "../articalTabs/ArticalsList";
import SeriesList from "../articalTabs/SeriesList";
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
        data: ArticalsList(turOnAuthorForArtical, data, authorName)
      },
      { 
        name: 'Series',
        data: SeriesList(turOnAuthorForArtical, data, authorName)
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
