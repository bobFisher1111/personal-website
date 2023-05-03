import * as React from 'react';
import {
    Grid,
    Tabs,
    Box,
    Tab,
} from "@mui/material";
import moment from 'moment';
import Works from '../works/Works';
import Card from '../sections/Card';
import FilteringComponent from "../../components/filteringComponent/FilteringComponent";
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import book2 from '../../assets/images/book2.png';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AuthorTabs = () => {
  const [value, setValue] = React.useState(0);
  const ArticalDate = moment().format('ll');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const ArticalsTab = () => {
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
        <FilteringComponent
            category={[]}
            categoryColor={"#667A6E"}
        />
        <Card
          title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
          backgroundColor={"white"}
          fontColor={"black"}
          img={finalfantasy7}
          author="Bob Fisher"
          likes='5'
          cardTextWidth={'671px'}
          date={ArticalDate}
          imageWidth={'200px'}
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
          cardTextWidth={'703px'}
          date={ArticalDate}
          imageWidth={'200px'}
          articalPage={false}
        />
      </Grid>
      </Grid>
    )
  };

  return (
    <Box
      sx={{
        width: '100%',
        '& .MuiBox-root': {
          padding: '0px 0px 0px 0px',
        },
        '& .MuiTabs-flexContainer': {
          padding: '0px 0px 0px 8px',
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#667A6E',
        },
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange} 
          aria-label="basic tabs example"
          textColor="inherit"
        >
          <Tab label="Articals" {...a11yProps(0)} />
          <Tab label="Books" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {ArticalsTab()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Works
          bookTitle="le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People"
          bookPlot="le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People"
          buyBookLink="https://www.ign.com"
          bookGenere="Science"
          bookYear='2001'
          authorsPage={true}
          bookCover={book2}
        />
      </TabPanel>
    </Box>
  );
}

export default AuthorTabs;
