import React from 'react';
import {
  Grid,
} from "@mui/material";
import ComingSoon from "../../utilities/ComingSoon";
import HorizontalArticalCardComponent from '../cards/articalCards/horizontalCard/HorizontalArticalCardComponent';
import { 
  GridPaddingArticalList,
  GridPaddingTop,
} from '../../styles/GridStyles';
import { TypographyArticalPageArticals, TypographyHorizontalArticalTitleArticalList } from '../../styles/TypographyStyles';

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
            <GridPaddingArticalList
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            />
            { sortByDate?.map((item: any, index: any) => (
              <>
               <TypographyHorizontalArticalTitleArticalList 
                  articalpage={false}
                  color="#2F4C69"
                >
                  {item.articalTitle}
                </TypographyHorizontalArticalTitleArticalList>
              <HorizontalArticalCardComponent
                key={index}
                title={item.articalTitle}
                articalSubTitle={item.articalSubTitle}
                author={item.author}
                cardTextWidth={'639px'}
                date={item.publishedDate}
                imageWidth={'321px'}
                articalPage={false}
                useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                section={item.section}
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
            <GridPaddingTop
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
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
                    <TypographyArticalPageArticals 
                      variant="body1"
                      color="#2F4C69" 
                    >
                      {item.articalTitle}
                    </TypographyArticalPageArticals>
                    <HorizontalArticalCardComponent
                      key={index}
                      title={item.articalTitle}
                      articalSubTitle={item.articalSubTitle}
                      author={item.author}
                      cardTextWidth={'639px'}
                      date={item.publishedDate}
                      imageWidth={'321px'}
                      articalPage={false}
                      useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                      section={item.section}
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
            </GridPaddingTop>
          </>
        }
      </>
    )
}

export type Props = {
  turOnAuthorForArtical: boolean, 
  data: any, 
};

export default ArticalsList;
