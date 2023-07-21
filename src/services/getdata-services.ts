import axios from "axios";
import { apiBaseURL } from "../config";
import { WebsiteData } from '../types/websiteData';
import onSuccess from './onSuccess';


export const getWebsiteData = () => axios.get<WebsiteData>(`${apiBaseURL}`).then(onSuccess);