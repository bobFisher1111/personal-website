import { useId } from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import HeaderComponent from 'src/components/headerComponent/HeaderComponent';
import WritersCard from './writersCard/WritersCard';
import {
  WritersGridRoot,
  WritersCardGrid,
} from './WritersStyle';

const Writers = () => {
  const id = useId();
  const theme = useTheme();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const authorsData = getWebsiteData?.authors;

  const sortAuthorsById = authorsData?.slice().sort(
    (a: any, b: any) => a.author_id - b.author_id
  );

  return (
    <>
      <Grid container sx={WritersGridRoot()}>
        <Grid size={12}>
          <HeaderComponent
            title="Writers"
            authorAvatar={false}
            avatarImage={authorsData?.avatar_image}
          />
        </Grid>
      </Grid>
      <Grid container sx={WritersCardGrid(theme)}>
        {sortAuthorsById?.map((item: any, index: number) => (
          <Grid
            key={`${id}-${index}`}
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
              xl: 6,
            }}
          >
            <WritersCard
              authorImage={item.avatar_image}
              authorName={item.author_name}
              authorsTitle={item.titles}
              authorId={item.author_id}
              facebook={item.facebook}
              twitter={item.twitter}
              youtube={item.you_tube}
              email={item.email}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Writers;
