'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from '@/app/_components/nav';
import Footer from '@/app/_components/footer';
import HomeSection from '@/app/_components/home-section';
import DoSection from '@/app/_components/do-section';
import WorkSection from '@/app/_components/work-section';
import ProcessSection from '@/app/_components/process-section';
import AboutSection from '@/app/_components/about-section';
import StudyModal from '@/app/_components/study-modal';
import BookingModal from '@/app/_components/booking-modal';
import { STUDIES } from '@/app/_lib/studies';
import type { Situation, View } from '@/app/_lib/types';

const CALENDLY_URL = 'https://calendly.com/numitechnologiesadmin/30min';
const BOOKING_MODE: 'overlay' | 'newTab' = 'overlay';
const SHOW_ENTERPRISE_IN_WORK = true;

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [situation, setSituation] = useState<Situation>(null);
  const [studyId, setStudyId] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  const [layout, setLayout] = useState<'story' | 'split'>('story');
  const [navH, setNavH] = useState(68);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const measure = () => {
      const el = navRef.current;
      if (!el) return;
      const h = Math.round(el.getBoundingClientRect().height);
      setNavH((prev) => (h && h !== prev ? h : prev));
    };
    measure();

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined' && navRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(navRef.current);
    }
    window.addEventListener('resize', measure);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setBooking((wasBooking) => {
        if (wasBooking) return false;
        setStudyId(null);
        return wasBooking;
      });
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('keydown', onKeyDown);
      ro?.disconnect();
    };
  }, []);

  const go = useCallback((next: View) => {
    setView(next);
    setStudyId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openStudy = useCallback((id: string) => {
    setView('work');
    setStudyId(id);
    setLayout('story');
  }, []);

  const book = useCallback(() => {
    if (BOOKING_MODE === 'newTab')
      window.open(CALENDLY_URL, '_blank', 'noopener');
    else setBooking(true);
  }, []);

  const study = STUDIES.find((s) => s.id === studyId) ?? null;
  const studies = SHOW_ENTERPRISE_IN_WORK
    ? STUDIES
    : STUDIES.filter((s) => s.id !== 'snap');
  const calendlySrc = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=fbf5ef&text_color=241c18&primary_color=de8b67`;

  return (
    <div className="font-sans text-[#2A211C] bg-[#FBF5EF] min-h-screen">
      <Nav navRef={navRef} view={view} onNavigate={go} onBook={book} />

      <main
        className="px-[0px] pb-16 max-w-[1180px] mx-auto"
        style={{ paddingTop: navH + 24 }}
      >
        {view === 'home' && (
          <HomeSection
            situation={situation}
            onPickNew={() => setSituation((s) => (s === 'new' ? null : 'new'))}
            onPickExisting={() =>
              setSituation((s) => (s === 'existing' ? null : 'existing'))
            }
            onBook={book}
            onOpenPitch={(e) => {
              e.stopPropagation();
              openStudy('pitch');
            }}
            onOpenClinic={(e) => {
              e.stopPropagation();
              openStudy('clinic');
            }}
            onNavigate={go}
          />
        )}

        {view === 'do' && <DoSection onBook={book} />}

        {view === 'work' && (
          <WorkSection studies={studies} onOpenStudy={openStudy} />
        )}

        {view === 'process' && <ProcessSection />}

        {view === 'about' && (
          <AboutSection onBook={book} onOpenSnap={() => openStudy('snap')} />
        )}

        <Footer />
      </main>

      {study && (
        <StudyModal
          study={study}
          layout={layout}
          onClose={() => setStudyId(null)}
          onLayoutStory={() => setLayout('story')}
          onLayoutSplit={() => setLayout('split')}
          onBook={book}
        />
      )}

      {booking && (
        <BookingModal
          calendlySrc={calendlySrc}
          onClose={() => setBooking(false)}
        />
      )}
    </div>
  );
}
