import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";

const CodingComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'All Articals',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'FrontEnd',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'BackEnd',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Data',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} />
      },
    ]
  )
}

export default CodingComponentTabData;
