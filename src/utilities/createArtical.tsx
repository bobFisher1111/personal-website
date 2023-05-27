import {
  Typography,
  Grid,
} from "@mui/material";
  
export const createArtical = (articalData: string) => {
  if (articalData.match('.jpg')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <img 
          src={articalData}
          style={{
            alignItems: 'center',
            minWidth: "500px",
            maxWidth: "814px",
            margin: 'auto',
            padding: '8px',
            justifyContent: 'center',
            border: '0px',
            borderRadius: '16px',
          }}
        />
      </Grid>
    )
  }
  if (articalData.match('youtube.com')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <iframe
          src={articalData} 
          allowFullScreen 
          ng-show="showvideo"
          style={{
            width: '960px', // use media query to fix this
            height: '576px', // use media query to fix this
            border: '0px',
            borderRadius: '7px',
          }}
        />
      </Grid>
    )
  }
  if (articalData.startsWith('$')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#2F4C69"
          sx={{
            borderColor: 'black',
            padding: '16px 0px 0px 0px',
            lineHeight: '32px',
            fontSize: '26px',
            fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
            maxWidth: '1000px',
          }}
        >
          { <strong>{articalData.slice(1)}</strong> }   
        </Typography>
      </Grid>
    )
  };
  if (articalData.startsWith('[')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#76468c"
          sx={{
            padding: '16px 0px 0px 0px',
            textIndent: '40px',
            lineHeight: '32px',
            fontSize: '20px',
            fontFamily: "source-serif-pro, Georgia, Cambria, 'Times New Roman', Times, serif",
            width: '1000px',
          }}
        >
          {articalData.slice(1)} 
        </Typography>
      </Grid>
    )
  };
  if (articalData.startsWith('(')) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <Typography
          id="articalText"
          color="#667A6E"
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
          {<i>"{articalData.slice(1)}"</i>} 
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
        { articalData }
      </Typography>
    </Grid>
  )
};

export default createArtical;
    