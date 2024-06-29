import Search from '@/assets/Search.svg?react'
import ShopingBag from '@/assets/ShoppingBag.svg?react'
import Add from '@/assets/Add.svg?react'

const iconMap = {
  Search,
  ShopingBag,
  Add,
}

type IconName = keyof typeof iconMap

type Props = { name: IconName }

const Icon = ({ name }: Props) => {
  const Icon = iconMap[name]
  return <Icon />
}

export default Icon
