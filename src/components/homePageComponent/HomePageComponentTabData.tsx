import ArticalsList from "../articalTabs/ArticalsList";
import SeriesList from "../articalTabs/SeriesList";

const HomePageComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'Articals',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Series',
        data: SeriesList(turOnAuthorForArtical, data)
      },
    ]
  )
}

export default HomePageComponentTabData;
