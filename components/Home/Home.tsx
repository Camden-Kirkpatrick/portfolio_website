'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    const initAOS = async() => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      });
    };

    initAOS();

    // Recalculate AOS trigger positions once everything has finished loading.
    // Without this, AOS measures positions before images load — when the
    // images finish loading and push content down, the trigger points are
    // stale and sections like Skills/Contact never reveal.
    const refresh = () => AOS.refresh();
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);
    window.addEventListener('hashchange', refresh);
    // Also refresh once any pending images finish, in case 'load' already fired.
    Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(res => { img.onload = img.onerror = res; }))
    ).then(refresh);

    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
      window.removeEventListener('hashchange', refresh);
    };
  }, [])

  return (
    <>
      <section id="home"><Hero /></section>
      <section id="resume"><Resume /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}

export default Home;