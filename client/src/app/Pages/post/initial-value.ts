import { iObjectImage } from '../../Interfaces/image-object.interface';
import { iPost } from '../../Interfaces/post.interface';

export const initialValueImg: iObjectImage = {
    date: new Date(),
    id: 0,
    postid: 0,
    thumbnail: 1, // is the image a thumbnail? 0/1
    url: 'https://via.placeholder.com/1000x700'
}
  
export const initialValuePost: iPost = {
    id: 0,
    title: 'Loading...',
    post: '',
    category: '',
    date: new Date(),
    archived: 0,
    images: [],
    imageurl: 'https://via.placeholder.com/1000x700',
    userid: 1,
    totalImages: 0
}