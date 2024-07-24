import { OurCoffes } from './CoffeList/index.tsx'
import { HomeFeatured } from './HomeFeatured/index.tsx'

export function HomePage() {
  return (
    <>
      <HomeFeatured />
      <OurCoffes />
    </>
  )
}
