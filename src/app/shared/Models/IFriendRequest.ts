export interface IfriendRequest {
  id: number;
  from_account: {
    id: number;
    profile_picture: string;
    full_name: string;
    location: string;
  };
  to_account: {
    id: number;
    profile_picture: string;
    full_name: string;
    location: string;
  };
  request_date: string;
}
