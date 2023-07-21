import {
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import SocialMediaComponent from '../../socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from './AppBarLinksToPages';
import MobileDrawer from './MobileDrawer';
import { BoxAppBar } from '../../../styles/BoxStyles';
import { GridDesktopAppBar, GridMobileAppBar } from '../../../styles/GridStyles';
import { TypographyMobileTitle, TypographyDesktopTitle } from '../../../styles/TypographyStyles';
import { LinkStyles } from "../../../styles/LinkStyles";
import AppConfig from '../../../config';

const WebSiteAppBar = () => {
  const facebook = AppConfig?.facebookURL;
  const twitter = "https://twitter.com/";
  const youtube = "https://www.youtube.com/channel/UC8GJo4nTgJlfhWdpsdT5rHQ";
  return (
    <BoxAppBar>
      <Grid 
        container
        direction="row"
        alignItems="center"
      >
        <GridDesktopAppBar
          item 
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
        >
          <Link to="/" 
            style={LinkStyles()}
            >
            <TypographyDesktopTitle>
              React2Python
            </TypographyDesktopTitle>
          </Link>
        </GridDesktopAppBar>
        <GridDesktopAppBar
          item 
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
        >
          <Grid 
            container
            spacing={2}
            justifyContent="center"
          >
            <SocialMediaComponent
              facebook={AppConfig?.facebookURL}
              twitter={twitter}
              youtube={AppConfig?.youtubeURL}
            />
          </Grid>
        </GridDesktopAppBar>
        <GridDesktopAppBar
          item 
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
        >
          <Grid 
            container
            spacing={2}
            justifyContent="flex-end"
          >
            <AppBarLinksToPages />
          </Grid>
        </GridDesktopAppBar>
        <GridMobileAppBar
          item 
          xs={6}
          sm={6}
          md={6}
          lg={0}
          xl={0}
        >
          <Grid
            container
            justifyContent="flex-start"
          >
            <MobileDrawer />
          </Grid>
        </GridMobileAppBar>
        <GridMobileAppBar
          item 
          xs={6}
          sm={6}
          md={6}
          lg={0}
          xl={0}
        >
          <Grid
            container
            justifyContent="flex-end"
          >
            <Link to="/" 
              style={{
                textDecoration: "none"
              }}
            >
              <TypographyMobileTitle>
                React2Python
              </TypographyMobileTitle>
            </Link>
          </Grid>
        </GridMobileAppBar>
      </Grid>
    </BoxAppBar>
)}

export default WebSiteAppBar;
