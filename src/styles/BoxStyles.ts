import React, { forwardRef } from 'react';
import {
  styled,
  Box
} from "@mui/material";

type articalPageProp = {
  articalPage: boolean,
  srcParam: string,
};
          
export const BoxMobileDrawer = styled(Box) ({
  width:  '75vw',
  height: '100vh',
  backgroundColor: "white",
});

export const BoxVerticalCardRoot = styled(Box) ({
  position: 'relative',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
});

export const BoxVerticalCardTitle = styled(Box) ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  color: 'white',
});

export const BoxVerticalCardFooter = styled(Box) ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  bgcolor: 'black',
  color: 'white',
  opacity: 0.70,
});

export const BoxAppBar = styled(Box) ({
  display: 'flex',
  maxWidth: "1024px",
  minWidth: "1024px",
  '@media only screen and (max-width: 600px)': {
    maxWidth: "95vw",
    minWidth: "95vw",
  },
  '@media only screen and (min-width: 992px)': {
    margin: 'auto',
  },
})

// TabsComponent
export const BoxTabPanel = styled(Box) ({
  p: 3
});

// TabsComponent
export const BoxTabsChange = styled(Box) ({
  width: '100%',
  '& .MuiBox-root': {
    padding: '0px 0px 0px 0px',
  },
  '& .MuiTabs-flexContainer': {
    padding: '0px 0px 0px 8px',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#667A6E',
    border: '1px',
  },
  "& button[aria-selected='true']": {
    borderBottom: "3px solid #667A6E"
  },
  '@media only screen and (max-width: 600px)': {
    "& button[aria-selected='true']": {
      borderBottom: "1px solid #667A6E"
    },
  },
});

export const BoxImageOrVideo = styled(Box)<articalPageProp>(({ 
  articalPage,
  srcParam,
}) => ({
  alt: 'Artical Cover Imag',
  src: srcParam,
  height: articalPage ? '576px' : '181px',
  borderRadius: '7px',
  aspectRatio: '16/9',
  width: articalPage ? '960px' : '321px',
}));

export default [ 
  BoxMobileDrawer,
  BoxAppBar,
  BoxTabPanel,
  BoxTabsChange,
  BoxImageOrVideo,
  BoxVerticalCardRoot,
  BoxVerticalCardTitle,
  BoxVerticalCardFooter,
];
