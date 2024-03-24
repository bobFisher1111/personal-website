import axios from 'axios';
import { apiBaseURL, websiteAPI } from '../config';
import { WebsiteData } from '../types/websiteData';
import onSuccess from './onSuccess';

export const getWebsiteData2 = () => axios.get<WebsiteData>(`${apiBaseURL}`).then(onSuccess);

export const getWebsiteData = () => axios.get<WebsiteData>(`${websiteAPI}`).then(onSuccess);