export const CopyCodeStyles = (copyIconColor: any) => ({
  "padding": "0px",
  "color": copyIconColor,
  "cursor": 'pointer',
  '&:hover': {
    "color": '#2F4C69',
  },
});

export const GridCopyCodeStyles = {
  "padding": "0px 16px 0px 0px",
};

export const GridTitleStyle = {
  "color": "lightgrey",
  "padding": "0px 0px 0px 16px",
  "marginRight": "auto"
};

export const HeaderStyles = {
  "height": "48px",
  "background": "#1f212a",
  "borderTopRightRadius": "8px",
  "borderTopLeftRadius": "8px",
  "borderBottom": "1px grey solid",
  '@media only screen and (min-width: 600px)': {
    "width": "680px",
  },
  '@media only screen and (max-width: 600px)': {
    "min-width": `calc(100vw - ${'32px'})`,
  },
};

export const PreTagStyles: any = () => ({
  "fontSize": "16px",
  "overflow": "auto",
  "color": "white",
  "textAlign": "left",
  // "fontFamily": 'source-code-pro, Menlo, Monaco, "Courier New", Courier, monospace',
  "border-bottom-left-radius": '8px',
  "border-bottom-right-radius": '8px',
  "margin": "0em",
  "fontWeight": "bold",
  '@media only screen and (max-width: 600px)': {
    "min-width": `calc(100vw - ${'32px'})`,
  },
  '@media only screen and (min-width: 600px)': {
    "width": "680px",
  },
});

export const RootStyles = {
  "padding": "18px",
};

export const TitleOfCodeStyles = {
  "fontSize": "16px",
  "fontWeight": "bold",
};

export default [
  CopyCodeStyles,
  GridCopyCodeStyles,
  GridTitleStyle,
  HeaderStyles,
  PreTagStyles,
  RootStyles,
  TitleOfCodeStyles,
];