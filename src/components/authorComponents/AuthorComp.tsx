import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Divider,
  CardContent,
  styled,
  Chip
} from "@mui/material";
import moment from 'moment';
import HeaderComponent from '../headerComponent/HeaderComponent';
import Section from '../../components/sections/Section';
import foxGirl from '../../assets/images/foxGirl.png';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const AuthorComp: React.FC<Props> = ({
}) => {
  const ArticalDate = moment().format('ll');
  return (
    <Grid
      container
      sx={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        paddingBottom: '200px',
        maxWidth: "1024px",
        margin: 'auto',
        padding: '16px 24px 0px 24px',
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
        <HeaderComponent
        title='Bob The Fisher'
        backgroundColor='white'
        fontColor='#667A6E'
        lineHeight={'40px'}
        fontSize={'32px'}
      />
      <Divider
          sx={{
            borderColor: '#282c34',
            padding: '16px 0px 16px 0px',
          }}
        />
      </Grid>
    </Grid>
  )
}

export type Props = {
  // title: string,
  // backgroundColor: string,
  // fontColor: string,
  // img: string,
  // headerTitle?: string,
  // category: string,
  // categoryColor: string,
  // cardTextWidth: string,
  // date: string,
};

export default AuthorComp;
