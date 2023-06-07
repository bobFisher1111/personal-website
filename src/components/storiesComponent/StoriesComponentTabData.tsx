import ArticalsList from "../articalTabs/ArticalsList";
import SeriesList from "../articalTabs/SeriesList";

const StoriesComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'Stories',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Series',
        data: SeriesList(turOnAuthorForArtical, data)
      },
    ]
  )
}

export default StoriesComponentTabData;
