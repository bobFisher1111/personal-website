import React from 'react';
import {
  Grid,
  Typography,
} from "@mui/material";
import ComingSoon from "../../utilities/ComingSoon";
import HorizontalArticalCardComponent from '../cards/articalCards/horizontalCard/HorizontalArticalCardComponent';

export const ArticalsList: React.FC<Props> = ({
  turOnAuthorForArtical, 
  data, 
}) => {
    const noArticals = data?.length === 0;
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
              sx={{
                padding: '16px',
              }}
            ></Grid>
            { data?.map((item: any, index: any) => (
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
                turnOnSubTitle={false}
              />
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
              sx={{
                paddingTop:'10px',
              }}
            >
              <Grid
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
                sx={{
                  margin: '16px 0px 16px 16px'
                }}
              >
                { data?.map((item: any, index: any) => (
                  <>
                    <Typography 
                      variant="body1"
                      color="#2F4C69" 
                      sx={{ 
                        fontSize: '24px', // check to see if this is correct size
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        fontFamily: 'sans-serif',
                      }} 
                      component="div"
                    >
                      {item.articalTitle}
                    </Typography>
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
                      turnOnSubTitle={false}
                      articalPageList={true}
                    />
                  </>
                ))}
              </Grid>
            </Grid>
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
