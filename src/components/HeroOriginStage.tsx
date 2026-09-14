import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import HeroReplica from './hero-v2/HeroReplica';
import OriginSection from './origin/OriginSection';

const DESKTOP_QUERY = '(min-width: 1024px)';

export default function HeroOriginStage() {
  const stageRef = useRef<HTMLElement>(null);
  const heroPanelRef = useRef<HTMLDivElement>(null);
  const originPanelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion() === true;
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(DESKTOP_QUERY).matches,
  );
  const [originIsActive, setOriginIsActive] = useState(false);
  const horizontalEnabled = isDesktop && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end end'],
  });
  const trackX = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    ['0vw', '0vw', '-100vw', '-100vw'],
  );

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const updateDesktop = () => setIsDesktop(media.matches);

    updateDesktop();
    media.addEventListener('change', updateDesktop);
    return () => media.removeEventListener('change', updateDesktop);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextOriginIsActive = horizontalEnabled && progress >= 0.5;
    setOriginIsActive((current) =>
      current === nextOriginIsActive ? current : nextOriginIsActive,
    );
  });

  useEffect(() => {
    if (!horizontalEnabled) {
      heroPanelRef.current?.removeAttribute('inert');
      originPanelRef.current?.removeAttribute('inert');
      setOriginIsActive(false);
      return;
    }

    heroPanelRef.current?.toggleAttribute('inert', originIsActive);
    originPanelRef.current?.toggleAttribute('inert', !originIsActive);
  }, [horizontalEnabled, originIsActive]);

  return (
    <section
      ref={stageRef}
      aria-label="Introdução e origem"
      data-horizontal-stage={horizontalEnabled ? 'active' : 'fallback'}
      className={
        horizontalEnabled
          ? 'relative h-[190svh] overflow-x-clip'
          : 'relative overflow-x-clip'
      }
    >
      {horizontalEnabled && (
        <span
          id="sobre"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 h-px w-px"
          style={{ top: 'calc(100% - 100svh)' }}
        />
      )}

      <div
        className={
          horizontalEnabled
            ? 'sticky top-0 h-[100svh] w-full overflow-hidden'
            : 'relative w-full overflow-x-clip'
        }
      >
        <motion.div
          className={
            horizontalEnabled
              ? 'flex h-full w-[200vw] will-change-transform'
              : 'relative block w-full'
          }
          style={horizontalEnabled ? { x: trackX } : undefined}
        >
          <div
            ref={heroPanelRef}
            aria-hidden={horizontalEnabled && originIsActive ? true : undefined}
            className={horizontalEnabled ? 'h-full w-screen shrink-0' : 'relative w-full'}
          >
            <HeroReplica />
          </div>

          {!horizontalEnabled && (
            <span id="sobre" aria-hidden="true" className="block h-px w-px" />
          )}

          <div
            ref={originPanelRef}
            aria-hidden={horizontalEnabled && !originIsActive ? true : undefined}
            className={
              horizontalEnabled
                ? 'h-full w-screen shrink-0'
                : isDesktop
                  ? 'relative h-[100svh] w-full'
                  : 'relative w-full'
            }
          >
            <OriginSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
