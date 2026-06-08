export interface User {
  name: string;
  img: string;
};
export interface Member {
  user: User;
  role?: string; // HACK: Should not be optional, but is for not due to no member function
}
export interface Category {
  name: string;
  channels: Channel[];
};
export interface Channel {
  name: string;
  description: string;
  type?: string; // HACK: Should not be optional, but channel types do not exist
  messages: Message[];
};
export interface Message {
  user: User;
  sent: Date;
  updated?: Date; // NOTE: Could use "| null", need review
  text: string;
};
export interface Server {
  name: string;
  img: string;
  categories?: Category[]; // HACK: Should not be optional, but current sidebar items uses this type
  
  // TODO: More
};