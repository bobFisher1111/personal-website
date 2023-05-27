import React from 'react';
import {
  Grid,
} from "@mui/material";
import TabsComponent from '../tabsComponent/TabsComponent';
import Card from '../sections/Card';
import FullArticalCard from "../cards/fullArticalCard/FullArticalCard";

const ArticalTabs: React.FC<Props> = ({
  turOnAuthorForArtical,
  oneLayerExtraTab,
  nameOne,
  nameTwo,
  nameThree,
  nameFour,
  websiteData,
  articalPageData,
  authorName,
}) => {
    const articalsData = websiteData;
    const Articals = () => {

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
                 { articalsData?.map((item: any, index: any) => (
                  <Card
                    key={index}
                    title={item.articalTitle}
                    articalSubTitle={item.articalSubTitle}
                    backgroundColor={"white"}
                    fontColor={"black"}
                    author={item.author}
                    likes={item.numberOfFavorites}
                    cardTextWidth={'639px'} // homepage 660px everywhere else so far 644px // 639
                    date={item.publishedDate}
                    imageWidth={'321px'}
                    articalPage={false}
                    useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                    section={item.section}
                    articalData={websiteData}
                    authorsId={item.authorId}
                    articalId={item.articalId}
                    videoOrImageCover={item.coverImageOrVideo}
                    sectionLink={item.sectionLink}
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
              { articalPageData?.map((item: any, index: any) => (
                <FullArticalCard
                  key={index}
                  name={authorName}
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
    return (
      <>
        {oneLayerExtraTab ?
          <TabsComponent
            turnOnSectionTabsPadding={false}
            extraTabs={true}
            position1={Articals}
            position2={Articals}
            position3={Articals}
            position4={Articals}
            position1Name={nameOne}
            position2Name={nameTwo}
            position3Name={nameThree}
            position4Name={nameFour}
          />
          :
          <TabsComponent
            turnOnSectionTabsPadding={false}
            extraTabs={false}
            position1={Articals}
            position2={Articals}
            position3={Articals}
            position1Name={'Latest Articals'}
            position2Name={'All Articals'}
            position3Name={'Popular Articals'}
          />
      }
      </>
    )
  }

export type Props = {
  turOnAuthorForArtical: boolean;
  oneLayerExtraTab: boolean;
  nameOne: string;
  nameTwo: string;
  nameThree: string;
  nameFour: string;
  websiteData?: any;
  articalPageData?: any;
  authorName?: string;
};

export default ArticalTabs;