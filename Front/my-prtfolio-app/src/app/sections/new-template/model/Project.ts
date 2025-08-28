export interface Techno {
  name: string;
  icon: string;
}
export interface Project {
  name: string;
  description: string;
  type: string;           
  video_link: string[];   
  link: string;           
  techno: Techno[];       
}
