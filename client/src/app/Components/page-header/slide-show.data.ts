const testing = true;

export interface iSlide {
    url: string;
    active: boolean;
    textClass: string;
    btnClass: string;
}

export interface iSlideShow {
  url: string;
  active: boolean;
  textClass: string;
  btnClass: string;
}

let slideShowData: iSlide[] = [
    { 
      url: '/assets/bg1.jpg', 
      active: true, 
      textClass: 'invert',
      btnClass: 'bg-contrast primary'
    },
    { 
      url: '/assets/bg2.jpg', 
      active: false, 
      textClass: 'invert',
      btnClass: 'bg-contrast primary'
    },
    { 
      url: '/assets/bg3.jpg',
      active: false, 
      textClass: 'invert',
      btnClass: 'bg-contrast primary'
    }
]

/*
    bg-primary
    bg-second
    bg-third
*/


export const SlideShowData = slideShowData;