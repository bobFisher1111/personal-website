import ArticleList from "src/components/articleList/ArticleList";
import SeriesComponent from "src/components/seriesList/SeriesComponent";
import type { Article } from "src/types/articals";
import type { Author } from "src/types/authors";
import type { Series } from "src/types/series";
import type { TabsDataItem } from "src/components/tabsComponent/TabsComponent";

const AuthorComponetTabData = (
  authorsData: readonly Author[],
  data: readonly Article[],
  getSeries: readonly Series[],
): TabsDataItem[] => [
    {
      name: "Uploads",
      data: <ArticleList authorData={authorsData} data={data} />,
    },
    {
      name: "Series",
      data: (
        <SeriesComponent series={getSeries} layout="grid" outerSx={{ pt: 2 }} />
      ),
    },
  ];

export default AuthorComponetTabData;
