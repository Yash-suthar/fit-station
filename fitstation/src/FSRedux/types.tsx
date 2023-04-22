export const SHOW_LOADER = 'SHOW_LOADER';
export const SIGNIN = 'SIGNIN';
export const NAME = 'NAME';
export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const BIRTHDATE = 'BIRTHDATE';

export type WorkOut = {
  title: string;
  date: string;
  time: string;
  count: string;
  starRating: number;
  circleColor: string[];
  category: string;
  tag: string;
  equipments: string;
  favourite: any;
  image: string;
};

export type Sets = {
  name: string;
  price: string;
  detail: string;
  url: string;
  link: string;
};
