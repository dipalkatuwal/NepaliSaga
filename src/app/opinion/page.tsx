export const dynamic = 'force-static'
import { generateSectionMetadata } from '@/components/layout/SectionPage'
import SectionPage from '@/components/layout/SectionPage'

export const metadata = generateSectionMetadata('opinion')

export default function Page() {
  return <SectionPage section="opinion" />
}
