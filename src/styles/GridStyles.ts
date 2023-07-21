import {
  styled,
  Grid
} from "@mui/material";

type homePageProp = {
   homepage: string,
};

type imageWidthProp = {
    imageWidth: string,
 };

type tabsComponentProps = {
  turnonsectiontabspadding: string,
}

export const GridAlignItems = styled(Grid) ({
  padding: '0px 16px 200px 16px',
  maxWidth: "1024px",
  margin: 'auto',
});

export const GridDesktopAppBar = styled(Grid) ({
  padding: '0px 16px 0px 16px',
  '@media (max-width: 1023px)': {
    display: 'none',
  },
});

export const GridMobileAppBar = styled(Grid) ({
  padding: '0px 16px 0px 16px',
  '@media (min-width: 1023px)': {
    display: 'none',
  },
});
  
export const GridMobileDrawerAppBar = styled(Grid) ({
  backgroundColor: "#667A6E",
  maxHeight: '36px',
  padding: '0px 0px 0px 8px',
  borderBottom: 'solid #2F4C69 1px',
});

export const GridCenterItems = styled(Grid) ({
  display: 'flex',
  justifyContent: 'center',
  padding: '16px 0px 16px 0px',
});

export const GridHeader = styled(Grid) ({
  padding: '50px 0px 0px 0px',
  '@media (max-width: 1023px)': {
    padding: '0px',
  },
});

export const GridHorizontalArticalContainer = styled(Grid) ({
  width: '100%',
  background: '#fff',
  display: 'flex',
  margin: '0px 0px 16px 0px',
});

export const GridArticalInfoComponent = styled(Grid) ({
  padding: '4px 0px 0px 0px',
});

export const GridHorizontalArticalMaxWidth = styled(Grid)<imageWidthProp>(({ imageWidth }) => ({
  maxWidth: imageWidth,
}));

export const GridOverflowHeader = styled(Grid) ({
  wordBreak: 'break-word',
  overflow: 'hidden',
});

export const GridHeaderTitle = styled(Grid) ({
  padding: '25px 0px 25px 0px'
});

export const GridPaddingRight = styled(Grid) ({
  padding: '0px 0px 0px 16px'
});

export const GridPadding = styled(Grid) ({
  padding: '16px',
});

export const GridAvatarPadding = styled(Grid) ({
  padding: '25px 16px 25px 16px',
});

export const GridRoot = styled(Grid) ({
  background: '#fff',
  minHeight: '100vh',
  display: 'flex',
  margin: 'auto',
  padding: '36px 24px 0px 24px',
});

export const GridMaxWidth = styled(Grid) ({
  maxWidth: '1600px',
});

export const GridPageWidth = styled(Grid) ({
  maxWidth: "1024px",
  margin: 'auto',
  padding: '16px 8px 0px 8px',
});

export const GridPaddingTop = styled(Grid) ({
  paddingTop:'16px',
});

export const GridPointer = styled(Grid) ({
  display: 'flex',
  cursor: "pointer",
});

export const GridSections = styled(Grid)<homePageProp>(({ homepage }) => ({
  padding: '16px',
  '&.MuiGrid-root': {
    '&.MuiGrid-item': {
      paddingTop: homepage ? '16px' : '32px',
    }
  },
}));

export const GridTabsComponent = styled(Grid)<tabsComponentProps>(({ turnonsectiontabspadding }) => ({
  padding: turnonsectiontabspadding ? '16px 0px 16px 0px' : '0px 0px 16px 0px',
}));

export const GridSectionList = styled(Grid) ({
  background: 'white',
  borderBottom: '3px solid #667A6E',
  padding: '37px',
  '&.MuiGrid-root': {
    marginTop: '0px'
  },
});

export const GridHoverBlack = styled(Grid) ({
  "&:hover": {
    color: "black",
  },
});

export const GridTopAndBottom = styled(Grid) ({
  padding: '16px 0px 16px 0px',
});

export const GridSeriesArticalList = styled(Grid) ({
  padding: '0px 0px 16px 0px',
});

export const GridSeriesRoot = styled(Grid) ({
  padding: '10px 0px 0px 0px',
});

export const GridMarginLeft = styled(Grid) ({
  margin: '0px 0px 0px 16px',
});

export const GridVeriticalCardVideo = styled(Grid) ({
  width: '345px',
  height: '400px',
  background: '#2F4C69',
});

export default [ 
  GridMobileDrawerAppBar,
  GridCenterItems,
  GridPointer,
  GridSectionList,
  GridHoverBlack,
  GridDesktopAppBar,
  GridMobileAppBar,
  GridAlignItems,
  GridTabsComponent,
  GridPadding,
  GridMaxWidth,
  GridPaddingTop,
  GridHorizontalArticalContainer,
  GridArticalInfoComponent,
  GridSeriesArticalList,
  GridSeriesRoot,
  GridMarginLeft,
  GridVeriticalCardVideo,
];
