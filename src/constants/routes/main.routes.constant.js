import {lazy} from 'react';
import {
  HOME_PATH,
  BLOG_PATH,
  CONTACT_PATH
} from './main.paths.constant';

export const COMMON_ROUTES = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('../../screens/home.screen')),
  }, 
  {
    path: BLOG_PATH,
    title: 'Blog',
    screen: lazy(() => import('../../screens/blog.screen')),
  }, 
  {
    path: CONTACT_PATH,
    title: 'Contact',
    screen: lazy(() => import('../../screens/contact.screen')),
  }
];
