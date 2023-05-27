import React, { useEffect, useState, useRef } from 'react';
import {
    Typography,
    Grid,
    Box,
    Divider,
    Card,
    CardContent,
    styled,
    Chip,
    CardMedia,
  } from "@mui/material";
import HeaderComponent from "../headerComponent/HeaderComponent";
import AlignGrid from "../../themes/StyledGrids";
import LatestArticalCardWide from "../../components/cards/additionalCards/LatestArticalCardWide"
import foxGirl from '../../assets/images/foxGirl.png';
import yinYangFox from '../../assets/images/yinYangFox.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { useResizeDetector } from 'react-resize-detector';
import { Link } from "react-router-dom";
import { Authors } from '../../types/authors';
// import MaterialIcon, {colorPalette} from 'material-icons-react';

const StyledCardContent = styled(CardContent)({
  '& .MuiCardContent-root': {
    backgroundColor: 'blue',
  },
  // flex: '0 0 100%',
  //minWidth: '735px',
  maxWidth: '703px', // homepage size 250px
  position: 'absolute',
  padding: '4px 16px 0px 16px', // default from mui
});
  
  // 
  const SectionCard: React.FC<Props> = ({
    title,
    backgroundColor,
    fontColor,
    author,
    likes,
    cardTextWidth,
    date,
    imageWidth,
    articalPage,
    articalSubTitle,
    titleFontSize,
    useVideoInsteadOfImage,
    section,
    articalData,
    authorsId,
    articalId,
    videoOrImageCover,
    sectionLink,
  }) => {
    const [fontSizes, setFontSizes] = useState<string>();
    const [authorPage, setAuthorPage] = useState<boolean>();
    const [sectionPage, setSectionPage] = useState<boolean>();
    const widthRef = useRef();
    const { width, height, ref } = useResizeDetector();
    const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
    const getAuthorData = getWebsiteData?.authors?.filter((item: any) => {
      return item.authorId === authorsId;
    });
  
    const getArticalsData = getWebsiteData?.articals?.filter((item: any) => {
      return item.authorId === authorsId;
    });
    
    const getIdFromUrl = () => {
      const currentLocation = window.location.href;
      const getIdFromCurrentLocation = currentLocation.split("/");
      const checkIfIncludesAuthor = getIdFromCurrentLocation.includes('authord');
      return (checkIfIncludesAuthor);
    };
   
   useEffect(() => {
     const currentLocation = window.location.href;
     const getIdFromCurrentLocation = currentLocation.split("/");
     const checkIfIncludesAuthor = getIdFromCurrentLocation.includes('author');
     setAuthorPage(checkIfIncludesAuthor);
   }, []);

   useEffect(() => {
      const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/");
    const checkIfIncludesAuthor = getIdFromCurrentLocation.includes(sectionLink);
    setSectionPage(checkIfIncludesAuthor);
  }, []);
  
   console.log('checking url', sectionPage)
   useEffect(() => {
    if(width && width === 800) {
        setFontSizes('16px');
    }
    else {
        setFontSizes('1px');
    }
   }, [width, ref]);

   const temptitle = 'Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review  VII Review FinalFantasyiiii VII Review  VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review  VII Review Final Fantasyiiii VII Review  VII Review Final Fantasy VII Review';
   console.log('section', section);
   const articalInfo = () => {
    return (
      <>
        <Link 
            to={`/artical/${authorsId}/${articalId}`}
            style={{
              textDecoration: "none"
            }}
          >
            <Typography
            sx={{
              fontSize: '16px',
              // color: "black",
              cursor: "pointer",
              "&:hover": {
                color: "#667A6E",
              },
              margin: "0px 22px 0px 0px"
            }}
            >
              More from the Artical
            </Typography>
          </Link> 
          <Grid 
            container
            direction="row"
            sx={{
              alignItems: 'center',
              padding: '8px 0px 0px 0px'
            }}
          >
           {!authorPage ? 
              <Link 
                to={`/author/${authorsId}`}
                style={{
                  textDecoration: "none"
                }}
              >
            <div 
              className={"material-symbols-outlined"}
                style={{
                  // alignItems: 'center',
                  fontSize: '20px',
                  color: '#2F4C69',
                  // marginTop: '8px',
                  marginRight: '4px',
                  lineHeight: '24px'
                }}
              >
                account_circle
              </div>
              </Link>
              :
              <div 
              className={"material-symbols-outlined"}
                style={{
                  // alignItems: 'center',
                  fontSize: '20px',
                  color: '#2F4C69',
                  // marginTop: '8px',
                  marginRight: '4px',
                  lineHeight: '24px'
                }}
              >
                account_circle
              </div>
              }
              {!authorPage ? 
              <Link 
                to={`/author/${authorsId}`}
                style={{
                  textDecoration: "none"
                }}
              >
            <Typography
              // variant="body1"
              color="#2F4C69"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '16px',
                paddingRight: '16px',
                lineHeight: '24px',
              }}
            >
              {getAuthorData[0]?.name}
            </Typography> 
            </Link>
            :
            <Typography
              // variant="body1"
              color="#2F4C69"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '16px',
                paddingRight: '16px',
                lineHeight: '24px',
              }}
            >
              {getAuthorData[0]?.name}
            </Typography> 
            }
            {/* <Typography
              // variant="body1"
              color="black"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '12px',
                lineHeight: '24px',
              }}
            >
              {likes}
            </Typography>
            <div 
              className="material-symbols-outlined" 
              style={{
                fontSize: '16px',
                color: 'pink',
                paddingRight: '16px',
                paddingLeft: '2px',
                lineHeight: '24px'
              }}
            >
              favorite
            </div> */}
            {!sectionPage ?
             <Link 
            to={`/${sectionLink}`}
            style={{
              textDecoration: "none"
            }}
          >
            <Chip
              color="primary"
              label={section}
              variant="outlined"
              size="small"
              sx={{
                color: 'black',
                cursor: 'pointer',
              }}
            />
            </Link>
            :
            <Chip
              color="primary"
              label={section}
              variant="outlined"
              size="small"
              sx={{
                color: 'black'
              }}
            />
          }
          </Grid>
      </>
    )
   }
   const articalSubText = () => {
    return (
          <Grid 
            container
            justifyContent={'center'}
            sx={{
              padding: '0px 0px 16px 0px',
            }}
          >
          <Typography 
          variant="body1"
          color="#667A6E" 
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
            lineHeight: '28px',
            fontSize: '22px',
          }} 
          component="div"
        >
          {articalSubTitle}
        </Typography>
          </Grid>
    )
   }
   const articalPageInfo = () => {
    return (
        <>
          <Grid 
            container 
            direction="row" 
            sx={{
              alignItems: 'center',
              padding: '4px 0px 0px 0px',
            }}
          >
          <Link 
            to={`/author/${authorsId}`}
            style={{
              textDecoration: "none"
            }}
          >
            <div 
              className={"material-symbols-outlined"}
                style={{
                  // alignItems: 'center',
                  fontSize: '20px',
                  color: '#2F4C69',
                  // marginTop: '8px',
                  marginRight: '4px',
                  // padding: '16px 0px 16px 0px',
                }}
              >
                account_circle
              </div>
            </Link>
            <Link 
            to={`/author/${authorsId}`}
            style={{
              textDecoration: "none"
            }}
          >
            <Typography
              // variant="body1"
              color="#2F4C69"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '16px',
                paddingRight: '16px'
              }}
            >
              {author} 
            </Typography>
            </Link>
            <Typography
              // variant="body1"
              color="black"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '16px',
                paddingRight: '16px'
              }}
            >
              |
            </Typography>
            <Typography
              variant="subtitle1"
              color="#667A6E"
              component="div"
              sx={{
                fontSize: '16px',
                paddingRight: '16px',
              }}
            >
              {date}
            </Typography>
            {/* <Typography
              // variant="body1"
              color="black"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '16px',
                paddingRight: '16px'
              }}
            >
              |
            </Typography>
            <Typography
              // variant="body1"
              color="#2F4C69"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '16px',
              }}
            >
              {likes}
            </Typography>
            <div 
              className="material-symbols-outlined" 
              style={{
                fontSize: '16px',
                color: 'pink',
                paddingRight: '16px',
                paddingLeft: '8px',
              }}
            >
              favorite
            </div> */}
            <Typography
              // variant="body1"
              color="#26282c34162e"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '16px',
                paddingRight: '16px'
              }}
            >
              |
            </Typography>
            <Link 
            to={`/${sectionLink}`}
            style={{
              textDecoration: "none"
            }}
          >
            <Chip
              color="primary"
              label={section}
              variant="outlined"
              size="small"
              sx={{
                color: 'black',
                cursor: 'pointer',
              }}
            />
            </Link>
          </Grid>
        </>
    )
   }
    return (
     <div>
      <Grid
        container
        direction="row"
        justifyContent={!articalPage ? 'left' : 'center'}
        // alignItems="center"
        sx={{
          width: '100%',
          background: '#fff',
          // minHeight: '100vh',
          display: 'flex',
          margin: '0px 0px 16px 0px', // not sure if this should be padding instead
          // paddingBottom: '200px',
        //   height: '200px',
          // gridTemplateColumns: '200px auto'
          // margin: '16px',
          // gridTemplateColumns: '200px auto',
          // position: 'relative'
        //   display: {
        //     xs: 'none',
        //     md: 'block'
        //   },
        }}
      >
        <Grid
          sx={{
            // background: '#fff',
            // minHeight: '100vh',
            // display: 'flex',
            // paddingBottom: '200px',
            // gridTemplateColumns: '200px auto'
            // minWidth: '200px',
            maxWidth: imageWidth,
            // height: '200px'
           
                // lineHeight: '1',
                // padding: '10px 16px 0px 16px',
      
          }}
        >
          {articalPage && 
            <Grid
              container
              // direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {articalSubText()}
            </Grid>
          }
          {!useVideoInsteadOfImage ?
          <Box
            component="img"
            sx={{
                // height: 233,
                // width: 350,
                maxWidth: '100%',
                height: 'auto',
                // width: 'auto/9',
                borderRadius: '7px',

            
                // width: '100%',
                // margin: 'auto',
                // maxWidth:'100%',
                // maxHeight: '100%',
                
                // flex: 1,
                // flexBasis: '1e-9px',
                aspectRatio: '16/9',
                // objectFit: 'scale-down'
            }}
            alt="The house from the offer."
            src={videoOrImageCover}
          /> :
            <CardMedia
              component="iframe"
              image={videoOrImageCover}
              //autoPlay
              allowFullScreen
              // ng-show="showvideo"
              // width= '100%' //"321" 
              // height= 'auto' // "181"
              // allow="autoplay"
              style={{
                // width: '100%', // '960px', // use media query to fix this
                // height: '100%', //'576px', // use media query to fix this
                // objectFit: 'cover',
                // position: 'absolute',
                // top: 0,
                // left: 0,
                width: articalPage ? '960px' : '321px',
                height: articalPage ? '576px' : '181px',
                // aspectRatio: 'auto 300 / 168.75',
                border: '0px',
                borderRadius: '7px',
                // padding: '32px',
              }}
            />
            }
          {articalPage && 
            <Grid
              container
              // direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {articalPageInfo()}
            </Grid>
          }
        </Grid>
        {!articalPage && <Card
          sx={{ 
            maxWidth: '740px',
            backgroundColor: 'white',
            boxShadow: "none",
            // position: 'relative',
          }}
        >
        <CardContent
          sx={{
            maxWidth: `${cardTextWidth} !important`, // homepage size 250px
            // position: 'absolute',
            padding: '4px 16px 0px 16px', // default from mui
          }}
        >
        <Typography 
          variant="body1"
          color="#2F4C69" 
          sx={{ 
            fontSize: '20px', // '15px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            fontFamily: 'sans-serif',
            // padding: '0 !important',
            // margin: '0 !important',
            // // position: 'aboslute'
            
          }} 
          component="div"
        >
          {title}
        </Typography>
        <Typography 
          variant="body1"
          color="#667A6E" 
          sx={{ 
            fontSize: '16px', // '15px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            fontFamily: 'sans-serif',
            // padding: '0 !important',
            // margin: '0 !important',
            // // position: 'aboslute'
            
          }} 
          component="div"
        >
          {articalSubTitle}
        </Typography>
        {!articalPage &&
          <Typography
            variant="subtitle1"
            color="#76468c"
            component="div"
            sx={{
              fontSize: '14px',
            }}
          >
            {date}
          </Typography>
        }
        {articalPage && articalPageInfo()}
        {!articalPage && articalInfo()}
      </CardContent>
      </Card>}
    </Grid>
  </div>
  );
  }

export type Props = {
  title: string,
  backgroundColor: string,
  fontColor: string,
  author: string,
  likes: string,
  cardTextWidth: string,
  date: string,
  imageWidth: string,
  articalPage: boolean,
  articalSubTitle?: string,
  titleFontSize?: string,
  useVideoInsteadOfImage: boolean,
  section: string,
  articalData: any,
  authorsId: string,
  articalId: string,
  videoOrImageCover: string,
  sectionLink: string,
};
  
export default SectionCard;

/*
 >
          {temptitle}
        </Typography>
        <Typography
          variant="subtitle1"
          color="#667A6E"
          component="div"
          sx={{
            fontSize: '14px',
          }}
        >
          {date}
        </Typography>
        {articalPageInfo()}
      </CardContent>
      </Card>
    </Grid>
  </div>
  );
  }
*/

