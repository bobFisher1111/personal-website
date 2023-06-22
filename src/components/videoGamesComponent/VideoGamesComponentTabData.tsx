import ArticalsList from "../articalTabs/ArticalsList";
import Series from "../seriesComponent/Series";

const VideoGamesComponentTabData = (turOnAuthorForArtical: boolean, data: any) => {
  return (
    [
      { 
        name: 'All Articals',
        data: <ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Modern',
        data:<ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Retro',
        data:<ArticalsList turOnAuthorForArtical={turOnAuthorForArtical} data={data} />
      },
      { 
        name: 'Series',
        data: <Series data={data} />
      },
    ]
  )
}

export default VideoGamesComponentTabData;
