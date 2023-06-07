import ArticalsList from "../articalTabs/ArticalsList";
import SeriesList from "../articalTabs/SeriesList";

const ShowsMoviesComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'All Articals',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Anime',
        data: SeriesList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Movies',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'TV Shows',
        data: SeriesList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Series',
        data: SeriesList(turOnAuthorForArtical, data)
      },
    ]
  )
}

export default ShowsMoviesComponentTabData;
