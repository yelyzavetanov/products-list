import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Products List',
    short_name: 'Products List',
    description: 'Products List',
    display: 'standalone',
  }
}
