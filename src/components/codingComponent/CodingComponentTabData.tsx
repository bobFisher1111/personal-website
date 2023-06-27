import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";

const CodingComponentTabData = (
  turOnAuthorForArtical: boolean,
  articalSectionFilter: any,
  articalFrontEndFilter: any,
  articalBackEndFilter: any,
  articalDataFilter: any,
) => {
  return (
    [
      { 
        name: 'All Articals',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalSectionFilter} />
      },
      { 
        name: 'FrontEnd',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalFrontEndFilter} />
      },
      { 
        name: 'BackEnd',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalBackEndFilter} />
      },
      { 
        name: 'Data',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalDataFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articalSectionFilter} section={"Coding"} />
      },
    ]
  )
}

export default CodingComponentTabData;
