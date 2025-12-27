import { useState } from 'react';
import { getWebsiteData } from './getdata-services';


export const useWebsiteData = () => {
  // eslint-disable-next-line
  const [webSiteData, setWebsiteData] = useState<any>([]);

  return {
    webSiteData
  };
};

export default useWebsiteData;