import { iObjectImage } from '../../Interfaces/image-object.interface';
import { iPost } from '../../Interfaces/post.interface';

export const initialValueImg: iObjectImage = {
    date: new Date(),
    id: 0,
    post_id: 0,
    thumbnail: 1, // is the image a thumbnail? 0/1
    url: 'https://i.ibb.co/3d3gpFW/example-featured.png'
}
  
export const initialValuePost: iPost = {
    id: 0,
    title: 'Loading...',
    post: '',
    category: '',
    date: new Date(),
    archived: 0,
    images: [],
    thumbnail: 'https://i.ibb.co/3d3gpFW/example-featured.png',
    user_id: 1,
    total_images: 0
}