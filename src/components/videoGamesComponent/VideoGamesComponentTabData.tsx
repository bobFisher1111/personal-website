import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";

const VideoGamesComponentTabData = (
  turOnAuthorForArtical: boolean,
  articalSectionFilter: any,
  articalModernFilter: any,
  articalRetroFilter: any,
) => {
  return (
    [
      { 
        name: 'All Articals',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalSectionFilter} />
      },
      { 
        name: 'Modern',
        data:<ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalModernFilter} />
      },
      { 
        name: 'Retro',
        data:<ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={articalRetroFilter} />
      },
      { 
        name: 'Series',
        data: <Series data={articalSectionFilter} section={"Video Games"} />
      },
    ]
  )
}

export default VideoGamesComponentTabData;
