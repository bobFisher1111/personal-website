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
}));

export const CardVerticalCard = styled(Card) ({
  minWidth: '345px',
  maxWidth: '345px',
});
      
export default [
  CardHorizontalArticalInfo,
  CardVerticalCard,
];
