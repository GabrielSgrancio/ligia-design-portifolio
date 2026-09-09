import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroReplica from './components/hero-v2/HeroReplica';
import ChildhoodSection from './components/sections/ChildhoodSection';
import MakeupSection from './components/sections/MakeupSection';
import NatureSection from './components/sections/NatureSection';
import ThreePhasesSection from './components/sections/ThreePhasesSection';
import TrampolimSection from './components/sections/TrampolimSection';
import LigiaBeautySection from './components/sections/LigiaBeautySection';
import ContactSection from './components/sections/ContactSection';
import FinalMirrorSection from './components/sections/FinalMirrorSection';
import CaseStudyDrawer from './components/CaseStudyDrawer';
import { trampolimProject, ligiaBeautyProject } from './data/projects';
import { CaseStudyData } from './types';

export default function App() {
  const [activeProject, setActiveProject] = useState<CaseStudyData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenTrampolim = () => {
    setActiveProject(trampolimProject);
    setIsDrawerOpen(true);
  };

  const handleOpenLigiaBeauty = () => {
    setActiveProject(ligiaBeautyProject);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F7] text-[#302B2D] selection:bg-[#E8CDD2] selection:text-[#302B2D]">
      {/* Recruiter Navigation Bar */}
      <Navigation />

      {/* Main Narrative Sections in exact chronological and spatial sequence */}
      <main>
        {/* 01 · Home (O Espelho - Hero v2 Replica) */}
        <HeroReplica />

        {/* 02 · Infância e Mirantão */}
        <ChildhoodSection />

        {/* 03 · A Maquiagem (Primeira forma de criar) */}
        <MakeupSection />

        {/* 04 · Mirantão e a Natureza */}
        <NatureSection />

        {/* 05 · Três Fases, Um Mesmo Olhar */}
        <ThreePhasesSection />

        {/* 06 · Projeto Trampolim (UX/UI & Product Design) */}
        <TrampolimSection onOpenCaseStudy={handleOpenTrampolim} />

        {/* 07 · Projeto Lígia Beauty (Branding & Experiência) */}
        <LigiaBeautySection onOpenCaseStudy={handleOpenLigiaBeauty} />

        {/* 08 · Contato */}
        <ContactSection />

        {/* 09 · Encerramento (O Espelho Novamente) */}
        <FinalMirrorSection />
      </main>

      {/* Fast, lateral horizontal sliding case study reader */}
      <CaseStudyDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        project={activeProject}
      />
    </div>
  );
}
