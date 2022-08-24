import { UserItem } from './user-item.interface';

export interface Users {
  code: number;
  data: UserItem[];
  error: number;
}
