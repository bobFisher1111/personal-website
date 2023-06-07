import ArticalsList from "../articalTabs/ArticalsList";
import SeriesList from "../articalTabs/SeriesList";

const VideoGamesComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'All Articals',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Modern',
        data: ArticalsList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Retro',
        data: SeriesList(turOnAuthorForArtical, data)
      },
      { 
        name: 'Series',
        data: SeriesList(turOnAuthorForArtical, data)
      },
    ]
  )
}

export default VideoGamesComponentTabData;
