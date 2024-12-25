export interface Message {
  content: string;
  timestamp: number;
}

export class MessageImpl implements Message {
  content: string;
  timestamp: number;

  constructor(content: string) {
      this.content = content;
      this.timestamp = Date.now();
  }
}