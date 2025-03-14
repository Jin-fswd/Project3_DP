import { useState } from 'react'
import './styles/App.css'
import TopNavbar from './components/TopNavbar'
import BottomNavbar from './components/BottomNavbar'
import MainContent from './components/MainContent'
import BookingPage from './components/BookingPage'
import FlightStatusPage from './components/FlightStatusPage'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('home')

  // 현재 활성화된 탭에 따라 컨텐츠 렌더링
  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return <BookingPage />
      case 'flight':
        return <FlightStatusPage />
      case 'trips':
        return <div className="placeholder-content">My Trips (Coming Soon)</div>
      case 'menu':
        return <div className="placeholder-content">Menu (Coming Soon)</div>
      case 'profile':
        return <div className="placeholder-content">Profile Page (Coming Soon)</div>
      case 'notifications':
        return <div className="placeholder-content">Notifications (Coming Soon)</div>
      case 'home':
      default:
        return <MainContent count={count} setCount={setCount} />
    }
  }

  return (
    <>
      <TopNavbar />
      {renderContent()}
      <BottomNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  )
}

export default App
