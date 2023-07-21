import {
  styled,
  Typography,
} from "@mui/material";

type articalPageProp = {
  articalpage: boolean,
  cardtextwidth?: string,
};

export const TypographyArticalPageArticals = styled(Typography) ({
  fontSize: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
});

export const TypographyArticalInfoRight = styled(Typography) ({
  fontSize: '16px',
  paddingRight: '16px',
});

export const TypographyArticalInfoLeft = styled(Typography) ({
  fontSize: '16px',
  paddingLeft: '16px'
});

export const TypographyHorizontalArticalTitle = styled(Typography)<articalPageProp>(({ articalpage }) => ({
  fontSize: '20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  maxWidth: articalpage ? '960px' : '321px',
}));

export const TypographyHorizontalArticalSubTitle = styled(Typography)<articalPageProp>(({ articalpage, cardtextwidth }) => ({
  fontSize: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  fontFamily: 'sans-serif',
  maxWidth: articalpage ? '321px' : `${cardtextwidth} !important`,
}));

export const TypographyHorizontalArticalDate = styled(Typography)({
  fontSize: '14px',
});

export const TypographyLinkTwoPage = styled(Typography) ({
  color: "white",
  cursor: "pointer",
  "&:hover": {
    color: "black",
  },
});

export const TypographyMobileTitle = styled(Typography) ({
  fontSize: '16px',
  color: "white",
  cursor: "pointer",
  "&:hover": {
    color: "black",
  },
});

export const TypographyDesktopTitle = styled(Typography) ({
  fontSize: '20px',
  color: "white",
  cursor: "pointer",
  "&:hover": {
    color: "black",
  },
});

export const TypographyMobileDrawer = styled(Typography) ({
  variant: 'h6',
  color: "#2F4C69",
  cursor: "pointer",
  "&:hover": {
    color: "black",
  },
  fontSize: '20px',
})

export const TypograohyMobileDrawerWebistieName = styled(Typography) ({
  variant: "h6",
  color: "white",
  cursor: "pointer",
  "&:hover": {
    color: "black",
  },
  fontSize: '20px',
});

export const TypographyHeaderTitle = styled(Typography) ({
  textAlign: 'center',
  color: '#2F4C69',
  fontSize: '32px',
  lineHeight: '40px',
  '@media (min-width: 1023px)': {
    padding: '25px 0px 25px 0px',
  },
});

export const TypographyHoverBlack = styled(Typography) ({
  color: "white",
  "&:hover": {
    color: "black",
  },
});

export const TypographyHorizontalInfoText = styled(Typography) ({
  fontSize: '16px',
  paddingRight: '16px',
  lineHeight: '24px',
});

export const TypographySeriesArticalTitle = styled(Typography) ({
  color: '#2F4C69',
  padding: '0px 0px 0px 16px',
  fontSize:'20px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
});

export const TypographySeriesArticalSubTitle = styled(Typography) ({
  color: '#667A6E',
  padding: '0px 0px 0px 16px',
  fontSize:'16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
});

export const TypographySeriesArticalDate = styled(Typography) ({  
  color: '#76468c',
  padding: '0px 0px 0px 16px',
  fontSize:'14px'
});

export const TypographySeriesTitle = styled(Typography) ({  
  color: '#2F4C69',
  padding: '16px 0px 16px 0px',
  fontSize: '24px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
});

export const TypographyVerticalCardTitleStyle = styled(Typography) ({
  fontSize: '20px',
  textShadow: 'black 2px 2px 2px',
  padding: '16px',
});

export const TypographyVerticalCardNameStyleHover = styled(Typography) ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  padding: '16px',
  "&:hover": {
    color: "#667A6E",
  },
});

export const TypographyVerticalCardNameStyle = styled(Typography) ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  padding: '16px'
});

export default [ 
  TypographyLinkTwoPage,
  TypographyMobileDrawer,
  TypograohyMobileDrawerWebistieName,
  TypographyDesktopTitle,
  TypographyArticalPageArticals,
  TypographyHorizontalArticalSubTitle,
  TypographyHorizontalArticalDate,
  TypographyArticalInfoRight,
  TypographyArticalInfoLeft,
  TypographySeriesArticalTitle,
  TypographySeriesArticalSubTitle,
  TypographySeriesArticalDate,  
  TypographySeriesTitle,
  TypographyVerticalCardTitleStyle,
  TypographyVerticalCardNameStyle,
];
