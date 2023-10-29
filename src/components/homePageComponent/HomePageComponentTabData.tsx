import React from 'react';
import ArticalsList from '../articalTabs/ArticalsList';
import Series from '../seriesComponent/Series';

const HomePageComponentTabData = (
  turOnAuthorForArtical: boolean,
  data: any
) => {
  return (
    [
      { 
        name: 'Articals',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} homePage={true}/>
      },
    ]
  );
};

export default HomePageComponentTabData;
