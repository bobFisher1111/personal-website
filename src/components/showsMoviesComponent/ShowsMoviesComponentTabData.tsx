import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";

const ShowsMoviesComponentTabData = (
  turOnAuthorForArtical: boolean,
  articalSectionFilter: any,
  articalAnimeFilter: any,
  articalMoviesFilter: any,
  articalTVShowsFilter: any,
) => {
  return (
    [
      { 
        name: 'All Articals',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalSectionFilter} />
      },
      { 
        name: 'Anime',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalAnimeFilter} />
      },
      { 
        name: 'Movies',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalMoviesFilter} />
      },
      { 
        name: 'TV Shows',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalTVShowsFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articalSectionFilter} section={"Shows & Movies"}/>
      },
    ]
  )
}

export default ShowsMoviesComponentTabData;
