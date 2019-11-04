export default {
  path: '/cinema',
  components: {
    default: () => import('@/views/Cinema'),
    footer: () => import('@/components/TabBar')
  }
}
