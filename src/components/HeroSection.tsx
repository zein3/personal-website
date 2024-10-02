import { HeroParallax } from "./ui/hero-parallax";

export default function HeroSection() {

  const products = [
    {
      title: 'My Website',
      link: '/',
      thumbnail: 'https://picsum.photos/412/296'
    },
    {
      title: 'My Website',
      link: '/',
      thumbnail: 'https://picsum.photos/412/296'
    },
    {
      title: 'My Website',
      link: '/',
      thumbnail: 'https://picsum.photos/412/296'
    },
    {
      title: 'My Website',
      link: '/',
      thumbnail: 'https://picsum.photos/412/296'
    },
    {
      title: 'My Website',
      link: '/',
      thumbnail: 'https://picsum.photos/412/296'
    },
    {
      title: 'My Website',
      link: '/',
      thumbnail: 'https://picsum.photos/412/296'
    },
  ]

  return (
    <HeroParallax products={products} />
  )
}