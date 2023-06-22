import React from 'react';
import {
  Grid,
} from "@mui/material";
import HorizontalArticalCardComponent from '../cards/articalCards/horizontalCard/HorizontalArticalCardComponent';
import VerticalArticalCardComponent from "../cards/articalCards/verticalCard/VerticalArticalCardComponent";

export const ArticalsList: React.FC<Props> = ({
  turOnAuthorForArtical, 
  data, 
  name,
}) => {
    return (
      <>
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
                  <VerticalArticalCardComponent
                    key={index}
                    name={name}
                    articalData={item}
                  />
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
  name?: string,
};

export default ArticalsList;
