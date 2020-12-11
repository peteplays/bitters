interface IData {
  name: string;
  path: string;
  content: string;
}

const data: IData[] = [
  {
    name: `The Bitters`,
    path: '/',
    content:'111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor vel laboriosam odio quod at eius porro est vitae ducimus! Possimus dignissimos corporis, nostrum consequatur repudiandae vero provident illum maxime?'
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

export default data;
