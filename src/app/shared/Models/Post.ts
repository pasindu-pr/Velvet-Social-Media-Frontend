export interface IPhoto {
  id: number;
  image_link: string;
}

export interface IPost {
  id: number;
  content: string;
  location: string;
  user: {
    id: number;
    profile_picture: string;
    full_name: string;
  };
  photos: IPhoto[];
  likes: IPostLike[];
  likes_count: number;
  comments_count: number;
  shares_count: number;
  created_at: string;
}

export interface IsharedPost {
  id: number;
  user: {
    id: number;
    profile_picture: string;
    full_name: string;
  };
  post: {
    id: number;
    content: string;
    location: string;
    user: {
      id: number;
      profile_picture: string;
      full_name: string;
    };
    photos: [
      {
        id: number;
        image_link: string;
      }
    ];
    likes_count: number;
    comments_count: number;
    shares_count: number;
    created_at: string;
  };
  is_shared_post: boolean;
  shared_content: string;
  created_at: string;
}

export interface IPostLike {
  id: number;
  user: {
    id: number;
    profile_picture: string;
    full_name: string;
  };
}

export interface IPostComment {
  id: number;
  user: {
    id: number;
    profile_picture: string;
    full_name: string;
  };
  content: string;
  created_at: string;
}
