import Navigation from './components/Navigation';
import HeroOriginStage from './components/HeroOriginStage';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#bba28d] text-[#302B2D] selection:bg-[#E8CDD2] selection:text-[#302B2D]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-[#bba28d] bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/hero-v2/01_wall_texture_sunlit.png)',
          backgroundSize: '100% 100%',
        }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: 'radial-gradient(ellipse 90% 74% at 50% 25%, transparent 55%, rgba(60,40,30,0.18) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(255,248,229,.05),transparent_38%,rgba(57,35,22,.07))]" />
      </div>
      <Navigation />
      <main className="relative z-10">
        <HeroOriginStage />
      </main>
    </div>
  );
}
