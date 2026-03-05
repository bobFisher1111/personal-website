import { useId } from "react";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "src/store/redux/hooks";
import PageContainer from "src/components/pageContainer/PageContainer";
import WritersCard from "./writersCard/WritersCard";
import type { Author } from "src/types/authors";

const Writers = () => {
  const id = useId();
  const getWebsiteData = useAppSelector((state) => state.webSiteData.data);
  const authorsData = getWebsiteData?.authors;

  const sortAuthorsById = authorsData
    ?.slice()
    .sort((a: Author, b: Author) => a.author_id - b.author_id);

  return (
    <PageContainer>
      {sortAuthorsById?.map((item, index) => (
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
            facebook={""}
            twitter={item.twitter}
            youtube={item.you_tube}
            email={item.email}
          />
        </Grid>
      ))}
    </PageContainer>
  );
};

export default Writers;
