export default {
  items: [
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'icon-home',
      badge: {
        variant: 'success',
        text: 'NEW'
      },
      children: [
        {
          name: "Products",
          url: "/dashboard",
          badge: {
            variant: 'success',
            text: 'NEW'
          },
        },
        {
          name: "Categories",
          url: "#",
          badge: {
            variant: 'success',
            text: 'NEW'
          },
        }
      ]
    },
    {
      name: 'Message',
      url: '#',
      icon: 'icon-speech',
      badge: {
        variant: 'success',
        text: '2'
      },
      children: [
        {
          name: "Sell",
          url: "#",
          badge: {
            variant: 'success',
            text: '2'
          },
        },
        {
          name: "Buy",
          url: "#",
          badge: {
            variant: 'success',
            text: '3'
          },
        }
      ]
    },
    {
      name: 'Notification',
      url: '#',
      icon: 'icon-bell',
      badge: {
        variant: 'success',
        text: '3'
      }
    },
    {
      name: 'Favorite',
      url: '#',
      icon: 'icon-heart',
      badge: {
        variant: 'success',
      }
    },
    {
      name: 'Profile',
      url: '#',
      icon: 'icon-user',
    },
  ]
}
