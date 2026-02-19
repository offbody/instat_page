import React, { useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { DashboardPreview } from "./components/DashboardPreview"
import { ContactModal } from "./components/ContactModal"

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <Header onContactClick={openModal} />

      <main>
        <Hero />
        <DashboardPreview />
      </main>

      <ContactModal open={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App
