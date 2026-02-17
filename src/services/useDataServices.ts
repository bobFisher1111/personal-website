import { useState } from 'react';


export const useWebsiteData = () => {
  // eslint-disable-next-line
  const [webSiteData, setWebsiteData] = useState<any>([]);

  return {
    webSiteData
  };
};

export default useWebsiteData;