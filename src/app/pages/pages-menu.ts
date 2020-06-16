import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Prestação de serviços',
    icon: 'fas fa-wrench',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Cadastros',
    group: true,
  },
  {
    title: 'Clientes',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'buttons',
    link: '/pages/buttons'
  }
];
