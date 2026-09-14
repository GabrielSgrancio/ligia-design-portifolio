import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type Memory = {
  id: 'child16' | 'princess';
  src: string;
  tapedSrc: string;
  alt: string;
  className: string;
};

const originPhotos = [
  {
    src: '/assets/origin/mirantao-archive/mirantao-01.jpeg',
    alt: 'Mirantão entre montanhas e casas iluminadas pelo sol.',
    position: 'center 58%',
  },
  {
    src: '/assets/origin/mirantao-archive/mirantao-02.jpeg',
    alt: 'Mirantão visto entre casas, árvores e montanhas.',
    position: 'center center',
  },
  {
    src: '/assets/origin/mirantao-archive/mirantao-03.jpeg',
    alt: 'Montanhas de Mirantão ao entardecer.',
    position: 'center 54%',
  },
  {
    src: '/assets/origin/mirantao-archive/mirantao-04.jpeg',
    alt: 'Araucárias de Mirantão cobertas pela névoa.',
    position: 'center 48%',
  },
  ...Array.from({ length: 13 }, (_, index) => ({
    src: '/assets/origin/mirantao-archive/mirantao-' + String(index + 5).padStart(2, '0') + '.jpeg',
    alt: 'Paisagem real de Mirantão, registro ' + String(index + 5).padStart(2, '0') + '.',
    position: 'center center',
  })),
] as const;

const memories: Memory[] = [
  {
    id: 'princess',
    src: '/assets/origin/04_origin-child-princess-exact.png',
    tapedSrc: '/assets/origin/origin-child-princess-v7.png',
    alt: 'Lígia criança com coroa, vestido azul e flores.',
    className: 'rotate-[-1deg]',
  },
  {
    id: 'child16',
    src: '/assets/origin/03_origin-child-16-exact.png',
    tapedSrc: '/assets/origin/origin-child-16-v7.png',
    alt: 'Lígia criança sentada no chão, com vestido branco.',
    className: 'rotate-[1deg]',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function OriginSection() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openMemory, setOpenMemory] = useState<Memory | null>(null);
  const touchStart = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const memoryTriggerRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion() === true;
  const currentPhoto = originPhotos[photoIndex];

  const selectPhoto = (step: number) => {
    setPhotoIndex((current) => (current + step + originPhotos.length) % originPhotos.length);
  };

  useEffect(() => {
    if (!openMemory) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenMemory(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      memoryTriggerRef.current?.focus();
    };
  }, [openMemory]);

  const renderMemory = (memory: Memory, extraClassName = '') => (
    <div
      key={memory.id}
      className={'relative w-full ' + extraClassName + ' ' + memory.className}
    >
      <button
        ref={memoryTriggerRef}
        type="button"
        onClick={(event) => {
          memoryTriggerRef.current = event.currentTarget;
          setOpenMemory(memory);
        }}
        aria-haspopup="dialog"
        aria-label={`Ampliar memória: ${memory.alt}`}
        className="group relative block w-full cursor-zoom-in transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d4b38]"
      >
        <img
          src={memory.tapedSrc}
          alt={memory.alt}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </button>
    </div>
  );

  return (
    <section
      aria-labelledby="origin-title"
      className="relative min-h-[180svh] overflow-x-clip bg-transparent text-[#3e2b20] lg:h-full lg:min-h-0 lg:overflow-hidden"
    >
      <div className="relative h-full w-full overflow-x-clip">
        <div className="relative h-full w-full">
              <div className="pointer-events-none absolute inset-0 z-0 lg:hidden bg-[radial-gradient(ellipse_70%_55%_at_78%_45%,rgba(255,245,219,.14),transparent_72%)]" />

              <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:block">
                <div
                  role="group"
                  tabIndex={0}
                  aria-label="Álbum de fotografias de Mirantão"
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowLeft') selectPhoto(-1);
                    if (event.key === 'ArrowRight') selectPhoto(1);
                  }}
                  onTouchStart={(event) => {
                    touchStart.current = event.changedTouches[0].clientX;
                  }}
                  onTouchEnd={(event) => {
                    if (touchStart.current === null) return;
                    const distance = event.changedTouches[0].clientX - touchStart.current;
                    if (Math.abs(distance) > 48) selectPhoto(distance > 0 ? -1 : 1);
                    touchStart.current = null;
                  }}
                  className="pointer-events-auto absolute right-0 top-[8%] z-10 aspect-[3/2] w-[65%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d4b38]"
                >
                  <div
                    className="absolute left-[12.9%] top-[15.8%] z-10 h-[63.4%] w-[74.1%] overflow-hidden bg-[#5f5650]"
                    style={{ contain: 'paint' }}
                  >
                    <AnimatePresence initial={false} mode="wait">
                      <motion.img
                        key={currentPhoto.src}
                        src={currentPhoto.src}
                        alt={currentPhoto.alt}
                        loading="eager"
                        decoding="async"
                        initial={prefersReducedMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.42, ease }}
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ objectPosition: currentPhoto.position }}
                      />
                    </AnimatePresence>
                  </div>

                  <img
                    src="/assets/origin/origin-window-frame-v7.png"
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    className="pointer-events-none absolute inset-0 z-20 h-full w-full object-contain"
                  />

                  <div className="absolute bottom-[-4%] left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 font-serif text-[15px] italic text-[#3f2c20] drop-shadow-[0_1px_2px_rgba(255,245,224,.7)]">
                    <button
                      type="button"
                      onClick={() => selectPhoto(-1)}
                      aria-label="Fotografia anterior"
                      className="pointer-events-auto grid min-h-11 min-w-11 cursor-pointer place-items-center rounded-full transition-colors hover:bg-[#f4e5d1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4e5d1]"
                    >
                      <ChevronLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
                    </button>
                    <span aria-live="polite" aria-atomic="true" className="min-w-[4.6rem] text-center tabular-nums">
                      {String(photoIndex + 1).padStart(2, '0')} / {String(originPhotos.length).padStart(2, '0')}
                    </span>
                    <button
                      type="button"
                      onClick={() => selectPhoto(1)}
                      aria-label="Próxima fotografia"
                      className="pointer-events-auto grid min-h-11 min-w-11 cursor-pointer place-items-center rounded-full transition-colors hover:bg-[#f4e5d1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4e5d1]"
                    >
                      <ChevronRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
                    </button>
                  </div>
                </div>

                <motion.header
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.46, ease }}
                  className="pointer-events-auto absolute left-[5%] top-[16.5%] z-40 w-[25.5%] text-[#3f2c20]"
                >
                  <p className="mb-5 font-sans text-[10px] uppercase tracking-[0.28em] text-[#624534]">
                    ORIGEM · MIRANTÃO
                  </p>
                  <h2
                    id="origin-title"
                    className="max-w-[12ch] font-serif text-[clamp(2.2rem,3.55vw,4.2rem)] font-normal leading-[0.94] tracking-[-0.045em]"
                  >
                    Eu cresci onde muita gente vinha para respirar.
                  </h2>
                  <div className="mt-7 space-y-6 font-serif text-[clamp(.9rem,1.08vw,1.18rem)] leading-[1.33] text-[#4d382a]">
                    <p>Mirantão é um pequeno distrito da Serra da Mantiqueira, em Minas Gerais, com menos de mil habitantes. Foi onde eu cresci.</p>
                    <p>Cercada por montanhas, mata, rios e cachoeiras, cresci em um lugar que muita gente procurava para descansar. Para mim, tudo aquilo era simplesmente casa.</p>
                    <p>Talvez por isso eu tenha aprendido tão cedo a prestar atenção. Na luz mudando sobre as montanhas, nas cores, nas texturas e nos pequenos detalhes que fazem um lugar parecer único.</p>
                    <p>Foi ali que meu jeito de enxergar beleza começou a se formar.</p>
                  </div>
                </motion.header>

                <div className="pointer-events-auto absolute left-[30.5%] top-[20%] z-40 flex w-[10%] flex-col gap-[4.5%]">
                  {memories.map((memory) => renderMemory(memory))}
                </div>
              </div>

              <div className="relative z-10 mx-auto grid w-full max-w-[2200px] items-start gap-10 px-5 pb-32 pt-28 sm:px-8 lg:hidden lg:min-h-full lg:grid-cols-[minmax(0,1fr)_minmax(92px,.35fr)_minmax(0,1.85fr)] lg:gap-7 lg:px-10 lg:pb-40 lg:pt-24 xl:px-16">
        <div className="order-2 relative min-w-0 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:order-3 lg:sticky lg:top-20 lg:min-h-[calc(100svh-6rem)]">
          <div
            role="group"
            tabIndex={0}
            aria-label="Álbum de fotografias de Mirantão"
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') selectPhoto(-1);
              if (event.key === 'ArrowRight') selectPhoto(1);
            }}
            onTouchStart={(event) => {
              touchStart.current = event.changedTouches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return;
              const distance = event.changedTouches[0].clientX - touchStart.current;
              if (Math.abs(distance) > 48) selectPhoto(distance > 0 ? -1 : 1);
              touchStart.current = null;
            }}
            className="relative isolate mx-auto aspect-[3/2] w-full max-w-[1400px] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d4b38]"
          >
            <div
              className="absolute left-[12.9%] top-[15.8%] h-[63.4%] w-[74.1%] overflow-hidden bg-[#5f5650]"
              style={{ contain: 'paint' }}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={currentPhoto.src}
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  loading="lazy"
                  decoding="async"
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.42, ease }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: currentPhoto.position }}
                />
              </AnimatePresence>
            </div>

            <img
              src="/assets/origin/origin-window-frame-v7.png"
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="pointer-events-none absolute inset-0 z-20 h-full w-full object-contain"
            />

            <div className="absolute bottom-[-7%] left-1/2 z-[70] flex -translate-x-1/2 items-center gap-1 font-serif text-[15px] italic text-[#3f2c20] drop-shadow-[0_1px_2px_rgba(255,245,224,.7)]">
              <button
                type="button"
                onClick={() => selectPhoto(-1)}
                aria-label="Fotografia anterior"
                className="pointer-events-auto grid min-h-11 min-w-11 cursor-pointer place-items-center rounded-full transition-colors hover:bg-[#f4e5d1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4e5d1]"
              >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
              </button>
              <span aria-live="polite" aria-atomic="true" className="min-w-[4.6rem] text-center tabular-nums">
                {String(photoIndex + 1).padStart(2, '0')} / {String(originPhotos.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={() => selectPhoto(1)}
                aria-label="Próxima fotografia"
                className="pointer-events-auto grid min-h-11 min-w-11 cursor-pointer place-items-center rounded-full transition-colors hover:bg-[#f4e5d1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4e5d1]"
              >
                <ChevronRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
              </button>
            </div>
          </div>
        </div>

        <div className="order-2 z-10 hidden items-start justify-center pt-[17vh] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex">
          <div className="flex w-full max-w-[140px] flex-col items-center gap-7">
            {memories.map((memory) => renderMemory(memory))}
          </div>
        </div>

        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.46, ease }}
          className="order-1 z-10 max-w-[38rem] lg:col-start-1 lg:row-start-1 lg:order-1 lg:pt-[8vh]"
        >
          <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.28em] text-[#624534] sm:text-[11px]">
            ORIGEM · MIRANTÃO
          </p>
          <h2
            id="origin-title-mobile"
            className="max-w-[15ch] font-serif text-[clamp(2.65rem,4.25vw,4.65rem)] font-normal leading-[0.96] tracking-[-0.045em] text-[#3f2c20]"
          >
            Eu cresci onde muita gente vinha para respirar.
          </h2>
        </motion.header>

        <div className="order-3 z-10 max-w-[38rem] lg:col-start-1 lg:row-start-2 lg:order-4 lg:pb-[14vh]">
          <div className="space-y-7 font-serif text-[1.08rem] leading-[1.35] text-[#4d382a] sm:text-[1.2rem]">
            {[
              'Mirantão é um pequeno distrito da Serra da Mantiqueira, em Minas Gerais, com menos de mil habitantes. Foi onde eu cresci.',
              'Cercada por montanhas, mata, rios e cachoeiras, cresci em um lugar que muita gente procurava para descansar. Para mim, tudo aquilo era simplesmente casa.',
              'Talvez por isso eu tenha aprendido tão cedo a prestar atenção. Na luz mudando sobre as montanhas, nas cores, nas texturas e nos pequenos detalhes que fazem um lugar parecer único.',
              'Foi ali que meu jeito de enxergar beleza começou a se formar.',
            ].map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: index === 0 ? 0.5 : 0.35 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.42, delay: prefersReducedMotion ? 0 : index * 0.05, ease }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="relative mt-10 flex items-start justify-center gap-1 lg:hidden">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.42, delay: index * 0.08, ease }}
                className={`relative w-[38%] max-w-[170px] ${memory.className}`}
              >
                <button
                  ref={memoryTriggerRef}
                  type="button"
                  onClick={(event) => {
                    memoryTriggerRef.current = event.currentTarget;
                    setOpenMemory(memory);
                  }}
                  aria-haspopup="dialog"
                  aria-label={`Ampliar memória: ${memory.alt}`}
                  className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d4b38]"
                >
                  <img src={memory.tapedSrc} alt={memory.alt} loading="lazy" decoding="async" className="block h-auto w-full" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
              </div>
            </div>

      </div>

      {openMemory && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-[#241811]/82 p-4 backdrop-blur-[5px] sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="origin-memory-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpenMemory(null);
          }}
        >
          <figure className="relative flex max-h-[92svh] max-w-[min(92vw,640px)] flex-col items-center">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpenMemory(null)}
              aria-label="Fechar memória"
              className="absolute -right-2 -top-2 z-10 grid min-h-11 min-w-11 cursor-pointer place-items-center rounded-full bg-[#f1e5d8] text-[#3d2b21] shadow-lg hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:-right-5 sm:-top-5"
            >
              <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <img
              src={openMemory.src}
              alt={openMemory.alt}
              className="max-h-[82svh] w-auto object-contain shadow-[0_28px_70px_rgba(0,0,0,.38)]"
            />
            <figcaption id="origin-memory-title" className="sr-only">
              {openMemory.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
