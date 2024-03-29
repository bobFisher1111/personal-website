import { About } from './about';

export type Authors = {
  authorId: string;
  name: string;
  avatarImage: string;
  biography:  string;
  titles: string;
  facebook: string;
  twitter: string;
  youtube: string;
  email: string;
  about: About[];
}

export type Authors2 = {
  authorId: number;
  name: string;
  avatarImage: string;
  biography:  string;
  titles: string;
  facebook: string;
  twitter: string;
  youtube: string;
  email: string;
  about: string;
};
    