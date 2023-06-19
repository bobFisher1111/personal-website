import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../series/Series";

const HomePageComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'Articals',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Series',
        data: <Series data={data} />
      },
    ]
  )
}

export default HomePageComponentTabData;
