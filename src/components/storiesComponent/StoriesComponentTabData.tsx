import React from 'react';
import ArticalsList from '../articalTabs/ArticalsList';
import Series from '../seriesComponent/Series';

const StoriesComponentTabData = (
  turOnAuthorForArtical: boolean,
  articalSectionFilter: any,
) => {
  return (
    [
      { 
        name: 'Stories',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalSectionFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articalSectionFilter} section={'Stories'}/>
      },
    ]
  );
};

export default StoriesComponentTabData;
