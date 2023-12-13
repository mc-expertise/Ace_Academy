export type MenuItemType = {
  title: string;
  submenu?: MenuItemType[];
};

export const menuItems: MenuItemType[] = [
  {
    title: 'Category',
    submenu: [
      {
        title: 'Arts & Entertainment',
        submenu: [
          {
            title: 'Category One',
          },
          {
            title: 'Category Two',
            submenu: [
              {
                title: 'Sub Category Two',
              },
              {
                title: 'Sub Category Two',
              },
            ],
          },
        ],
      },
      {
        title: 'Business',
        submenu: [
          {
            title: 'Business',
            submenu: [
              {
                title: 'Business',
              },
              {
                title: 'Business',
              },
            ],
          },
          {
            title: 'Business',
            submenu: [
              {
                title: 'Business',
              },
              {
                title: 'Business',
              },
            ],
          },
        ],
      },
      {
        title: 'Community & Government',
        submenu: [
          {
            title: 'Community & Government',
            submenu: [
              {
                title: 'Community & Government',
              },
              {
                title: 'Community & Government',
              },
            ],
          },
          {
            title: 'Community & Government',
            submenu: [
              {
                title: 'Community & Government',
              },
              {
                title: 'Community & Government',
              },
            ],
          },
        ],
      },
      {
        title: 'Home & Lifestyle',
        submenu: [
          {
            title: 'Home & Lifestyle',
            submenu: [
              {
                title: 'Home & Lifestyle',
              },
              {
                title: 'Home & Lifestyle',
              },
            ],
          },
          {
            title: 'Home & Lifestyle',
            submenu: [
              {
                title: 'Home & Lifestyle',
              },
              {
                title: 'Home & Lifestyle',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Budget',
    submenu: [
      {
        title: 'web design',
      },
      {
        title: 'web development',
        submenu: [
          {
            title: 'Frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
              },
              {
                title: 'PHP',
              },
            ],
          },
        ],
      },
      {
        title: 'SEO',
      },
    ],
  },
  {
    title: 'Provider',
    submenu: [
      {
        title: 'Who we are',
      },
      {
        title: 'Our values',
      },
    ],
  },
  {
    title: 'Duration',
    submenu: [
      {
        title: 'Who we are',
      },
      {
        title: 'Our values',
      },
    ],
  },
];
