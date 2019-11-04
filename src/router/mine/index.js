export default {
  path: '/mine',
  components: {
    default: () => import('@/views/Mine'),
    footer: () => import('@/components/TabBar')
  }
}
