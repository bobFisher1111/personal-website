import { Books } from './books';
import { Articles } from './articals';
import { Authors } from './authors';

export type WebsiteData = {
  books: Books[];
  articals: Articles[];
  authors: Authors[];
}