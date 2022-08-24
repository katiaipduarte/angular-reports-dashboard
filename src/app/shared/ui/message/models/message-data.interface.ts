import { MessageType } from '..';

export interface MessageData {
  title?: string;
  message: string;
  type: MessageType;
}
