import axios from 'axios';
import { apiBaseURL, websiteAPI } from 'src/config';
import { WebsiteData } from 'src/types/websiteData';
import onSuccess from './onSuccess';

export const getWebsiteData2 = () => axios.get<WebsiteData>(`${apiBaseURL}`).then(onSuccess);

export const getWebsiteData = () => axios.get<WebsiteData>(`${websiteAPI}`).then(onSuccess);