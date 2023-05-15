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
import { useResizeDetector } from 'react-resize-detector';
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
    img,
    author,
    likes,
    cardTextWidth,
    date,
    imageWidth,
    articalPage,
    articalSubTitle,
    titleFontSize,
    useVideoInsteadOfImage,
  }) => {
   const [fontSizes, setFontSizes] = useState<string>();
   const widthRef = useRef();
   const { width, height, ref } = useResizeDetector();

   useEffect(() => {
    if(width && width === 800) {
        setFontSizes('16px');
    }
    else {
        setFontSizes('1px');
    }
   }, [width, ref]);

   // const testingboolean = false;

   const temptitle = 'Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review  VII Review FinalFantasyiiii VII Review  VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review  VII Review Final Fantasyiiii VII Review  VII Review Final Fantasy VII Review';

   const articalInfo = () => {
    return (
          <Grid container direction="row" sx={{alignItems: 'center' }}>
            <div 
              className={"material-symbols-outlined"}
                style={{
                  // alignItems: 'center',
                  fontSize: '16px',
                  color: '#2F4C69',
                  // marginTop: '8px',
                  marginRight: '4px',
                  lineHeight: '24px'
                }}
              >
                account_circle
              </div>
            <Typography
              // variant="body1"
              color="#2F4C69"
              sx={{
                // lineHeight: '16.8px',
                fontSize: '12px',
                paddingRight: '16px',
                lineHeight: '24px',
              }}
            >
              {author}
            </Typography>
            <Typography
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
            </div>
            <Chip
              color="primary"
              label="VideoGames"
              variant="outlined"
              size="small"
              sx={{
                color: 'black'
              }}
            />
          </Grid>
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
          <Grid container direction="row" sx={{alignItems: 'center' }}>
            <div 
              className={"material-symbols-outlined"}
                style={{
                  // alignItems: 'center',
                  fontSize: '16px',
                  color: '#2F4C69',
                  // marginTop: '8px',
                  marginRight: '4px',
                }}
              >
                account_circle
              </div>
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
            </div>
            {!articalPage && 
            <>
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
            <Chip
              color="primary"
              label="VideoGames"
              variant="outlined"
              size="small"
              sx={{
                color: 'black'
              }}
            />
             </>
            }
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
          margin: '0px 0px 8px 0px', // not sure if this should be padding instead
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
            src={img}
          /> :
            <CardMedia
              component="iframe"
              image={'https://www.youtube.com/embed/1zme8jkQZ1U'}
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
          {title}
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
  img: string,
  author: string,
  likes: string,
  cardTextWidth: string,
  date: string,
  imageWidth: string,
  articalPage: boolean,
  articalSubTitle?: string,
  titleFontSize?: string,
  useVideoInsteadOfImage: boolean,
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

