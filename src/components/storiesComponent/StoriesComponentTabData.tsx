import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";

const StoriesComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'Stories',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} />
      },
    ]
  )
}

export default StoriesComponentTabData;
