import axios from "axios";
import { WebsiteData } from '../types/websiteData';
import onSuccess from './onSuccess';


export const getWebsiteData = () => axios.get<WebsiteData>('http://localhost:4200/webSiteData').then(onSuccess);