import { useEffect, useState } from 'react';
import { getWebsiteData } from './getdata-services';


export const useWebsiteData = () => {
  // eslint-disable-next-line
  const [webSiteData, setWebsiteData] = useState<any>([]);

  useEffect(() => {
    if (webSiteData) {
      getWebsiteData()
        .then(res  => setWebsiteData(res))
        .catch(err => console.log('getData error', err));
    }
  }, []);

  return {
    webSiteData
  };
};

export default useWebsiteData;