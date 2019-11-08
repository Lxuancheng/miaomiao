export default {
  path: '/move',
  redirect: '/move/nowplaying',
  components: {
    default: () => import('@/views/Move'),
    footer: () => import('@/components/TabBar')
  },
  children: [
    {
      path: 'nowplaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'detail/1/:moveId',
      components: {
        default: () => import('@/components/NowPlaying'),
        detail: () => import('@/views/Move/detail')
      },
      props: {
        detail: true
      }
    },
    {
      path: 'detail/2/:moveId',
      components: {
        default: () => import('@/components/ComingSoon'),
        detail: () => import('@/views/Move/detail')
      },
      props: {
        detail: true
      }
    }
  ]
}
