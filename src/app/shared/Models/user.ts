import { IPhoto, IPost, IsharedPost } from './Post';

export interface IUser {
  id: number;
  birthdate: string;
  email: string;
  first_name: string;
  last_name: string;
  location: string;
  profile_picture: string;
}

export interface ICurrentUser extends IUser {
  website: string;
  description: string;
  friends: number;
  photos: IPhoto[];
  posts: any;
}
