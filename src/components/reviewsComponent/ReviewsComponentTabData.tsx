import React from 'react';
import ArticalsList from '../articalTabs/ArticalsList';
import Series from '../seriesComponent/Series';

const ReviewsComponentTabData = (
  turOnAuthorForArtical: boolean,
  articalSectionFilter: any,
  articalAnimeFilter: any,
  articalMoviesFilter: any,
) => {
  return (
    [
      { 
        name: 'All Reviews',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalSectionFilter} />
      },
      { 
        name: 'Modern',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalAnimeFilter} />
      },
      { 
        name: 'Retro',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalMoviesFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articalSectionFilter} section={'Reviews'}/>
      },
    ]
  );
};

export default ReviewsComponentTabData;
