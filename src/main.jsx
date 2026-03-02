import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Clubs from './pages/Clubs'
import ClubDetail from './pages/ClubDetail'
import Events from './pages/Events'
import JoinUs from './pages/JoinUs'
import OpeningDetail from './pages/OpeningDetail'
import Memories from './pages/Memories'
import GetStarted from './pages/GetStarted'

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const isClubsPage = normalizedPath === '/clubs'
const isEventsPage = normalizedPath === '/events'
const isJoinUsPage = normalizedPath === '/join-us'
const isMemoriesPage = normalizedPath === '/memories'
const isGetStartedPage = normalizedPath === '/get-started'
const clubDetailMatch = normalizedPath.match(/^\/clubs\/([^/]+)$/)
const openingDetailMatch = normalizedPath.match(/^\/join-us\/([^/]+)$/)
const clubSlug = clubDetailMatch ? decodeURIComponent(clubDetailMatch[1]) : null
const openingSlug = openingDetailMatch ? decodeURIComponent(openingDetailMatch[1]) : null

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {openingSlug ? (
      <OpeningDetail slug={openingSlug} />
    ) : clubSlug ? (
      <ClubDetail slug={clubSlug} />
    ) : isClubsPage ? (
      <Clubs />
    ) : isEventsPage ? (
      <Events />
    ) : isJoinUsPage ? (
      <JoinUs />
    ) : isMemoriesPage ? (
      <Memories />
    ) : isGetStartedPage ? (
      <GetStarted />
    ) : (
      <Home />
    )}
  </StrictMode>,
)
