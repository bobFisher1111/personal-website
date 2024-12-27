import React from 'react';
import Grid from '@mui/material/Grid2';
import { useSelector } from 'react-redux';
import HeaderComponent from '../headerComponent/HeaderComponent';
import WritersCard from './writersCard/WritersCard';
import {
  WritersGridRoot,
  WritersCardGrid,
} from './WritersStyle';

const Writers = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;
  const newNonImmutableArray = authorsData?.map((item: any) => item);
  const sortAuthorsById = newNonImmutableArray?.sort((a: any, b: any) => {
    return a.authorId - b.authorId;
  });
  return (
    <>
      <Grid
        container
        sx={WritersGridRoot}
      >
        <Grid
          size={12}
        >
          <HeaderComponent
            title='Writers'
            authorAvatar={false}
            avatarImage={authorsData?.avatarImage}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={WritersCardGrid}
      >
        {sortAuthorsById?.map((item: any) => (
          <Grid
            key={item.id}
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
              xl: 6,
            }}
          >
            <WritersCard
              authorImage={item.avatarImage}
              authorName={item.authorName}
              authorsTitle={item.titles}
              authorId={item.authorId}
              facebook={item.facebook}
              twitter={item.twitter}
              youtube={item.youtube}
              email={item.email}
            />
          </Grid>
        ))}
      </Grid>
    </> 
  );
};
  
export default Writers;
