import React from 'react';
import {
  Grid,
} from "@mui/material";
import moment from 'moment';
// import Card from '../sections/HorizontalArticalCard';
import FilteringComponent from "../filteringComponent/FilteringComponent";
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const SectionTabComponent : React.FC<Props> = ({
  turnOnSectionTabs,
  cardTextWidth,
}) => {
    const ArticalDate = moment().format('ll');
    return (
      <>
      <h1>turtle</h1>
      {/*
       <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
        {turnOnSectionTabs && 
          <FilteringComponent
            category={[]}
            categoryColor={"#667A6E"}
        />
        }
        { articalsData?.map((item: any, index: any) => (
                  <Card
                    key={index}
                    title={item.articalTitle}
                    articalSubTitle={item.articalSubTitle}
                    backgroundColor={"white"}
                    fontColor={"black"}
                    img={'https://www.nme.com/wp-content/uploads/2020/04/040120-Square-Enix-Final-Fantasy-7-VII-Remake-Cloud-Press-Image.jpg'}
                    author={item.author}
                    likes={item.numberOfFavorites}
                    cardTextWidth={'639px'} // homepage 660px everywhere else so far 644px // 639
                    date={item.publishDate}
                    imageWidth={'321px'}
                    articalPage={false}
                    useVideoInsteadOfImage={item.useVideoInsteadOfImage}
                    section={item.section}
                    articalData={websiteData}
                    authorsId={item.authorId}
                 />
                 ))}
      </Grid>
    </Grid>
        */}
        </>
  )
};

export type Props = {
  turnOnSectionTabs: boolean;
  cardTextWidth: string;
};

export default SectionTabComponent;
