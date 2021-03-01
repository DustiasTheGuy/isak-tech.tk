import { iObjectImage } from './image-object.interface';

export interface iPost {
    id: number;
    post: string;
    title: string;
    category: string;
    date: Date;
    archived: number;
    images: iObjectImage[];
    totalImages: number;
    imageurl: string;
    userid: number;
}