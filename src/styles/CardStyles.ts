import {
  styled,
  Card,
} from "@mui/material";
      
type articalPageProp = {
    articalpagelist: boolean,
};

export const CardHorizontalArticalInfo = styled(Card)<articalPageProp>(({ articalpagelist }) => ({
  maxWidth: '740px',
  backgroundColor: 'white',
  boxShadow: "none",
  padding: !articalpagelist ? '4px 0px 0px 24px' : '',
  '@media only screen and (min-width: 768px)': {
    maxWidth: '45%',
  },
  '@media only screen and (min-width: 992px)': {
    maxWidth: '50%'
  },
  '@media only screen and (max-width: 600px)': {
    padding: '0px',
  },
}));

export const CardVerticalCard = styled(Card) ({
  width: '365px',
  '@media only screen and (max-width: 992px)': {
    width: '321px',
  },
  '@media only screen and (min-width: 992px)': {
    width: '345px',
  },
  '@media only screen and (max-width: 600px)': {
    minWidth: 'calc(100vw - 48px)',
    maxWidth: 'calc(100vw - 48px)',
  },
});

export const CardSectionCard = {
  '@media only screen and (max-width: 600px)': {
    boxShadow: 0
  },
};
      
export default [
  CardHorizontalArticalInfo,
  CardVerticalCard,
  CardSectionCard,
];
