import React, { useEffect, useState, useRef } from 'react';
import {
    Typography,
    Grid,
  } from "@mui/material";
  import moment from 'moment';
import HeaderComponent from "../headerComponent/HeaderComponent";
import Card from "../sections/Card";
import AlignGrid from "../../themes/StyledGrids";
import LatestArticalCardWide from "../../components/cards/additionalCards/LatestArticalCardWide"
import foxGirl from '../../assets/images/foxGirl.png';
import yinYangFox from '../../assets/images/yinYangFox.jpeg';
import { useResizeDetector } from 'react-resize-detector';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import AuthorComponent from './AuthorComponent';

/*
   - Todo:
     3. Build component for author, include short bio, links and previous articals
*/
  
const ArticalPage: React.FC<Props> = ({
    subTitle,
}) => {
  const [artT, setArtT] = useState<String>('');
  const ArticalDate = moment().format('ll'); 
  const boldText = "$Turtle was here";
  const tempText = "Lorem Ipsum is simply {dummy text} of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const tempTextLong = tempText + tempText + tempText + tempText + tempText + tempText + tempText + tempText + tempText + tempText + tempText + tempText;   
  const parentheses = "(My first JRPG, back when I was in fifth grade My first JRPG, back when I was in fifth grade My first JRPG, back when I was in fifth grade My first JRPG, back when I was in fifth grade";
  const one = tempText.split('{');
  console.log('split1', one);
  console.log('split2', one);

  const tempData: any = [
    boldText,
    tempText,
    boldText,
    finalfantasy7,
    boldText,
    tempTextLong,
    parentheses,
    boldText,
    'https://www.youtube.com/embed/Tai2xRz-5Lw',
    boldText,
    tempText,
    '[1. turtle went to the park',
    finalfantasy7,
    '[2. turtle went to the park',
    '[3. turtle went to the park',
  ];
  // this will be added to data model
  subTitle = "My first JRPG, back when I was in fifth grade.";

  const displayArtical = (item: string) => {
    if (item.match('.jpg')) {
        return (
          <Grid
            container
            justifyContent="center"
          >
            <img 
                src={item}
                style={{
                    alignItems: 'center',
                    minWidth: "500px",
                    maxWidth: "814px",
                    margin: 'auto',
                    padding: '8px',
                    justifyContent: 'center',
                }}
            />
          </Grid>
        )
    }
    if (item.match('youtube.com')) {
        return (
            <Grid
            container
            justifyContent="center"
          >
            <iframe
              src={item} 
              allowFullScreen 
              ng-show="showvideo"
              style={{
                width: '960px', // use media query to fix this
                height: '576px', // use media query to fix this
              }}
            />
            </Grid>
        )
    }
    if (item.startsWith('$')) {
        return (
                    <Grid
                    container
                    justifyContent="center"
                  >
                    <Typography
                      id="articalText"
                      sx={{
                        borderColor: 'black',
                        padding: '16px 0px 0px 0px',
                        lineHeight: '32px',
                        fontSize: '26px',
                        fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
                        maxWidth: '1000px',
                      }}
                    >
                      { <strong>{item.slice(1)}</strong> }   
                    </Typography>
                    </Grid>
                )
              };
              if (item.startsWith('[')) {
                return (
                            <Grid
                            container
                            justifyContent="center"
                          >
                            <Typography
                              id="articalText"
                              sx={{
                                padding: '16px 0px 0px 0px',
                                textIndent: '40px',
                                lineHeight: '32px',
                                fontSize: '20px',
                                fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
                                width: '1000px', // '840px',
                                // alignItems: 'center',
                              }}
                            >
                            {item.slice(1)} 
                            </Typography>
                            </Grid>
                        )
                      };
              if (item.match('.jpg')) {
        return (
          <Grid
            container
            justifyContent="center"
          >
            <img 
                src={item}
                style={{
                    alignItems: 'center',
                    minWidth: "500px",
                    maxWidth: "814px",
                    margin: 'auto',
                    padding: '8px',
                    justifyContent: 'center',
                }}
            />
          </Grid>
        )
    }
              if (item.startsWith('(')) {
                return (
                            <Grid
                            container
                            justifyContent="center"
                          >
                            <Typography
                              id="articalText"
                              color="grey"
                              sx={{
                                borderColor: 'black',
                                padding: '16px 0px 0px 0px',
                                lineHeight: '32px',
                                fontSize: '26px',
                                fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
                                maxWidth: '1000px',
                                fontStyle: 'itallic',
                              }}
                            >
                              {<i>"{item.slice(1)}"</i>} 
                            </Typography>
                            </Grid>
                        )
                      };
    
    return (
        <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#2F4C69"
          sx={{
            padding: '16px 0px 0px 0px',
            textIndent: '40px',
            lineHeight: '32px',
            fontSize: '20px',
            fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
            width: '1000px',
            alignItems: 'center',
            ':: first-letter': {
                fontWeight: 'bold',
            }
          }}
        >
          { item }
        </Typography>
        </Grid>
    )
  };

  return (
    <>
    <Grid
      container
      sx={{
        background: '#fff',
        paddingBottom: '200px',
        maxWidth: "2000px",
        margin: 'auto',
        top: '30px',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
        sx={{
            alignItems: 'center',
            padding: '32px',
            
          }}
      >
       <HeaderComponent
          title={'Final Fantasy VII Review'}
          backgroundColor={'white'}
          fontColor={'black'}
          lineHeight={'40px'}
          fontSize={'32px'}
        />
      <Card
          title={'First JRPG ever played, was given money for birthday and the cover art looked cool. Had no idea what to expect'}
          backgroundColor={'white'}
          fontColor={'black'}
          img={finalfantasy7}
          author="Bob Fisher"
          likes='5'
          cardTextWidth={'1000px'}
          date={ArticalDate}
          imageWidth={'1000px'}
          articalPage={true}
          articalSubTitle={subTitle}
      />
       
            {tempData  && tempData?.map((item: any) => (
                displayArtical(item)
        ))}
    </Grid>
        <Grid
        item
        xs={0}
        sm={0}
        md={0}
        lg={4}
        xl={4}
        sx={{
          padding: '32px', 
        }}
      >
       <AuthorComponent />
      </Grid>
    </Grid>
  </>
);
}

export type Props = {
 subTitle: string;
};

export default ArticalPage;