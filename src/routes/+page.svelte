<script lang="ts">
  import { onMount } from 'svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Education from '$lib/components/Education.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import {
    profile,
    skillGroups,
    cloudProviders,
    mernStack,
    experiences,
    projects,
    education,
  } from '$lib/data';

  onMount(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
</script>

<Hero {profile} />

<div class="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-[300px_1fr] md:items-start lg:px-8">
  <!-- Sidebar -->
  <aside class="flex flex-col gap-6">
    <Skills {skillGroups} {cloudProviders} {mernStack} />
    <Education {education} />
  </aside>

  <!-- Main content -->
  <main class="flex flex-col gap-6">
    <Experience {experiences} />
    <Projects {projects} />
  </main>
</div>

<Footer github={profile.github} name={profile.name} />

