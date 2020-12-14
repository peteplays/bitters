import { ReactElement } from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';

interface IMainData {
  name: string;
  path: string;
  content: string;
}

export const mainData: IMainData[] = [
  {
    name: 'The Bitters',
    path: '/',
    content: '111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor vel laboriosam odio quod at eius porro est vitae ducimus! Possimus dignissimos corporis, nostrum consequatur repudiandae vero provident illum maxime?'
  },
  {
    name: 'Our Story',
    path: '/our-story',
    content:'222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor vel laboriosam odio quod at eius porro est vitae ducimus! Possimus dignissimos corporis, nostrum consequatur repudiandae vero provident illum maxime? 111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor vel laboriosam odio quod at eius porro est vitae ducimus! Possimus dignissimos corporis, nostrum consequatur repudiandae vero provident illum maxime?'
  },
  {
    name: 'About',
    path: '/about',
    content:'333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor vel laboriosam odio quod at eius porro est vitae ducimus! Possimus dignissimos corporis, nostrum consequatur repudiandae vero provident illum maxime?'
  },
];

interface IFooterData {
  link: string;
  display: string;
  icon: ReactElement;
}

export const footerData: IFooterData[] = [
  {
    link: 'mailto:fake@email.com',
    display: 'Email TBD',
    icon: <MailOutlineIcon />,
  },
  {
    link: 'https://www.instagram.com/',
    display: 'Instagram TBD',
    icon: <InstagramIcon />,
  },
  {
    link: 'https://www.peteplays.com/',
    display: 'Web Site TBD',
    icon: <LanguageIcon />,
  }
];
