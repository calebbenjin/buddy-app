// types.ts
export interface StockItem {
  symbol: string;
  price: number;
  change: number;
  data: number[];
}



export interface Sender {
  id: string;
  name: string;
  avatar: string;
}

export interface Document {
  name: string;
  preview: string;
}

export interface ChatMessage {
  id: string;
  text?: string;
  document?: Document;
  sender: Sender;
  time: string;
}
