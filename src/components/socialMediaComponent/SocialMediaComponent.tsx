import { Grid } from '@mui/material';
import CopyLinkComponent from 'src/components/copyLinkComponent/CopyLinkComponent';

import {
  socialMediaIconStyle,
  socialMediaGridItemStyle,
  emailGridStyle,
} from './SocialMediaComponentStyles';

const SocialMediaComponent = ({
  turnOnEmail,
  turnOnEmailStyle,
  email,
  justifyContent,
  alignContent,
}: Props) => {

  return (
    <Grid container justifyContent={justifyContent} alignContent={alignContent}>
      {turnOnEmail && (
        <Grid sx={emailGridStyle(turnOnEmailStyle)}>
          <CopyLinkComponent email authorsEmail={email} />
        </Grid>
      )}
    </Grid>
  );
};

export type Props = {
  widthPadding?: string;
  turnOnStyle?: boolean;
  turnOnEmail?: boolean;
  turnOnEmailStyle?: boolean;
  email?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  justifyContent: string;
  alignContent: string;
};

export default SocialMediaComponent;
