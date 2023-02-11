import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import TeamCard from './TeamCard';
import foxGirl from '../../assets/images/foxGirl.png';
import yinYangFox from '../../assets/images/yinYangFox.jpeg';

const About = () => {
  const contactDescription = "Mission Statement....";

  return (
    <Box
    sx={{
      // background: '#282c34',
      minHeight: '100vh',
      padding: '32px 16px 32px 16px',
      display: 'flex'
    }}
  >
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ 
        display: 'flex',
        maxWidth: "1024px",
        margin: 'auto', 
        paddingTop: '30px',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Typography
          variant="h5"
          style={{
            textAlign: 'center',
            color: '#2F4C69',
            padding: '75px 0px 12px 0px',
          }}
        >
        About Us
      </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          paddingBottom: '75px',
        }}
      >
        <Typography
        sx={{
          color: '#667A6E',
          textAlign: 'center'
        }}
      >
       {contactDescription}
      </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
        }}
      >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'fled-start',
          color: '#2F4C69',
          padding: '75px 0px 0x 0px',
          // textDecoration: 'underline',
        }}
      >
        Our Team
      </Typography>
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ padding: '16px'}}
      >
        <TeamCard 
          firstName={"Bob the"}
          lastName={"Fisher"}
          title={"CEO"}
          teamInfo={"...."}
          avatarImage={foxGirl}
        />
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ padding: '16px'}}
      >
        <TeamCard 
          firstName={"Bob the"}
          lastName={"Fisher"}
          title={"CEO"}
          teamInfo={"...."}
          avatarImage={yinYangFox}
        />
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ padding: '16px'}}
      >
        <TeamCard 
          firstName={"Bob the"}
          lastName={"Fisher"}
          title={"CEO"}
          teamInfo={"...."}
          avatarImage={foxGirl}
        />
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ padding: '16px'}}
      >
        <TeamCard 
          firstName={"Bob the"}
          lastName={"Fisher"}
          title={"CEO"}
          teamInfo={"..........................................................................................................................................................................................................................................................................."}
          avatarImage={yinYangFox}
        />
      </Grid>
      </Grid>
    </Box>
  );
}

export default About;
