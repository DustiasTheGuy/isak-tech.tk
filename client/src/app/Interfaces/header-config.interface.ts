export interface iPageHeaderConfig {
    title?: string;
    subtitle?: string;
    button?: _button;
    image?: _image;
    theme?: _theme;
    layout?: _layout;
}


declare interface _button {
    href: string;
    text: string;
    show: boolean;
}

export interface _image {
    src: string;
    alt: string;
}

declare interface _theme {
    text_color?: string;
    button_color?: string;
}

declare interface _layout {
    height?: string;
    width?: string;
    alignment?: string;
    bottom_border?: string;
}