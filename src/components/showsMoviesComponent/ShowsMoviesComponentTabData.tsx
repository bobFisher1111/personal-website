import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";

const ShowsMoviesComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'All Articals',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Anime',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Movies',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'TV Shows',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} />
      },
    ]
  )
}

export default ShowsMoviesComponentTabData;
