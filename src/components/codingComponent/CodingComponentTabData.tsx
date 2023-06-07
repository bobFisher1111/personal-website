import ArticalsList from "../articalTabs/ArticalsList";
import SeriesList from "../articalTabs/SeriesList";

const CodingComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'All Articals',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'FrontEnd',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'BackEnd',
        data: SeriesList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Data',
        data: SeriesList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Series',
        data: SeriesList(turOnAuthorForArtical, data)
      },
    ]
  )
}

export default CodingComponentTabData;
