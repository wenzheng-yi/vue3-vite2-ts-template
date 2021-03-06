import { NIcon } from 'naive-ui'
import { h } from 'vue'
// export function useIcon(icon: string) {
//   return () =>
//     h(
//       NIcon,
//       null,
//       h(
//         'svg',
//         {
//           class: 'icon',
//           'aria-hidden': 'true'
//         },
//         h('use', {
//           'xlink:href': '#' + icon
//         })
//       )
//     )
// }
export function renderIcon({ icon }: { icon: string }) {
  return () =>
    h(NIcon, null, () =>
      h('i', {
        class: 'ali-icon ' + icon
      })
    )
}
