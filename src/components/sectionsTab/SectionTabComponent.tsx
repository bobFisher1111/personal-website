import React from 'react';
import {
  Grid,
} from "@mui/material";
import moment from 'moment';
import Card from '../sections/Card';
import FilteringComponent from "../filteringComponent/FilteringComponent";
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const SectionTabComponent : React.FC<Props> = ({
  turnOnSectionTabs,
  cardTextWidth,
}) => {
    const ArticalDate = moment().format('ll');
    return (
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
        <Card
          title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
          backgroundColor={"white"}
          fontColor={"black"}
          img={finalfantasy7}
          author="Bob Fisher"
          likes='5'
          cardTextWidth={cardTextWidth} // homepage 660px everywhere else so far 644px
          date={ArticalDate}
          imageWidth={'300px'}
          articalPage={false}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Card
          title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
          backgroundColor={"white"}
          fontColor={"black"}
          img={finalfantasy7}
          author="Bob Fisher"
          likes='5'
          cardTextWidth={cardTextWidth} // homepage 660px
          date={ArticalDate}
          imageWidth={'300px'}
          articalPage={false}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Card
          title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
          backgroundColor={"white"}
          fontColor={"black"}
          img={finalfantasy7}
          author="Bob Fisher"
          likes='5'
          cardTextWidth={cardTextWidth} // homepage 660px
          date={ArticalDate}
          imageWidth={'300px'}
          articalPage={false}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
       <Card
          title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
          backgroundColor={"white"}
          fontColor={"black"}
          img={finalfantasy7}
          author="Bob Fisher"
          likes='5'
          cardTextWidth={cardTextWidth} // homepage 660px
          date={ArticalDate}
          imageWidth={'300px'}
          articalPage={false}
        />
      </Grid>
    </Grid>
  )
};

export type Props = {
  turnOnSectionTabs: boolean;
  cardTextWidth: string;
};

export default SectionTabComponent;
