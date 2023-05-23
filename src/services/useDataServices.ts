import React, { useEffect, useState } from 'react';
import { getWebsiteData } from './getdata-services';


export const useWebsiteData = () => {
  const [webSiteData, setWebsiteData] = useState<any>([]);
  const dbData:any = [];

  useEffect(() => {
    if (webSiteData) {
      getWebsiteData()
    .then(res  => setWebsiteData(res))
    .catch(err => console.log('getData error', err));
    }
  }, [])

  return {
    webSiteData
  };
}

export default useWebsiteData;