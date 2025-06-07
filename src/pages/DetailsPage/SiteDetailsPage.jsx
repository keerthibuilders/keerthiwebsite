import React from 'react'
import DetailsPageHero from './Components/DetailsPageHero'
import DetailsHighlights from './Components/DetailsHighlights'
import DetailsNavbar from './DetailsNavbarTap/DetailsNavbar'
import DetailsAmenities from './Components/DetailsAmenities'
import DetailsGallery from './Components/DetailsGallery'
import DetailsLocation from './Components/DetailsLocation'
import DetailsPlan from './Components/DetailsPlan'

const SiteDetailsPage = () => {
  return (
    <div>
      <DetailsPageHero />
      <DetailsNavbar />
      <DetailsHighlights />
      <DetailsAmenities />
      <DetailsPlan />
      <DetailsGallery />
      <DetailsLocation />
    </div>
  )
}

export default SiteDetailsPage
