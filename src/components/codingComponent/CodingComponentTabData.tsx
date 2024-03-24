import React from 'react';
import ArticalsList from '../articalTabs/ArticalsList';
import Series from '../seriesComponent/Series';

const CodingComponentTabData = (
  turOnAuthorForArtical: boolean,
  articalSectionFilter: any,
  articalFrontEndFilter: any,
  articalDataFilter: any,
) => {
  return (
    [
      { 
        name: 'All Articles',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalSectionFilter} />
      },
      { 
        name: 'Full Stack',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalFrontEndFilter} />
      },
      { 
        name: 'Game Dev',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalDataFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articalSectionFilter} section={'Coding'} />
      },
    ]
  );
};

export default CodingComponentTabData;
