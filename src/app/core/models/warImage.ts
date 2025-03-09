export interface Image {
    
    src: string;
    alt: string;
  }
  
  export interface LinkGroup {
    [key: string]: Image[];
  }