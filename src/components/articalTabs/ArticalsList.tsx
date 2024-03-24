import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import ComingSoon from '../comingSoon/ComingSoon';
import formatDate from '../../util/formatDate';
import HorizontalArticalCardComponent from '../cards/articalCards/horizontalCard/HorizontalArticalCardComponent';
import {
  GridPaddingArticalList,
  GridPaddingTop,
  TypographyArticalPageArticals,
  TypographyHorizontalArticalTitleArticalList,
} from './ArticalsListStyles';

export const ArticalsList: React.FC<Props> = ({
  turOnAuthorForArtical, 
  data,
}) => {
  const noArticals = data?.length === 0;
  const newNonImmutableArray = data?.map((item: any) => item);
  const sortByDate = newNonImmutableArray?.sort((a: any, b: any)=> {
    const date1: any = new Date(a.publishedDate);
    const date2: any = new Date(b.publishedDate);
    return date2 - date1;
  });
  
  return (
    <>
      {noArticals && 
          <ComingSoon />
      }
      {!turOnAuthorForArtical &&
          <>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={GridPaddingArticalList}
            />
            { sortByDate?.map((item: any) => (
              <>
                <Typography
                  sx={TypographyHorizontalArticalTitleArticalList(false)}
                >
                  {item.articalTitle}
                </Typography>
                <HorizontalArticalCardComponent
                  key={item.id}
                  title={item.articalTitle}
                  articalSubTitle={item.articalSubTitle}
                  author={item.author}
                  cardTextWidth={'639px'}
                  date={formatDate(item.publishedDate)}
                  imageWidth={'321px'}
                  articalPage={false}
                  useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                  section={item.sections}
                  articalData={data}
                  authorsId={item.authorId}
                  articalId={item.articalId}
                  videoOrImageCover={item.coverImageOrVideo}
                  sectionLink={item.sectionLink}
                  series={item.series}
                  seriesId={item.seriesId}
                  mobileImageWidth={'32px'}
                  videoHeight={false}
                />
              </>
            ))}
          </>
      }
      {turOnAuthorForArtical &&
          <>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={GridPaddingTop}
            >
              <Grid
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
              >
                { sortByDate?.map((item: any, index: any) => (
                  <>
                    <Typography 
                      variant="body1"
                      color="#2F4C69"
                      sx={TypographyArticalPageArticals}
                    >
                      {item.articalTitle}
                    </Typography>
                    <HorizontalArticalCardComponent
                      key={index}
                      title={item.articalTitle}
                      articalSubTitle={item.articalSubTitle}
                      author={item.author}
                      cardTextWidth={'639px'}
                      date={formatDate(item.publishedDate)}
                      imageWidth={'321px'}
                      articalPage={false}
                      useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                      section={item.sections}
                      articalData={data}
                      authorsId={item.authorId}
                      articalId={item.articalId}
                      videoOrImageCover={item.coverImageOrVideo}
                      sectionLink={item.sectionLink}
                      articalPageList={true}
                      series={item.series}
                      seriesId={item.seriesId}
                      mobileImageWidth={'48px'}
                      videoHeight={false}
                    />
                  </>
                ))}
              </Grid>
            </Grid>
          </>
      }
    </>
  );
};

export type Props = {
  turOnAuthorForArtical: boolean, 
  data: any, 
};

export default ArticalsList;
