<script lang="ts">
  import type { profile as ProfileType } from '$lib/data';

  let { profile }: { profile: typeof ProfileType } = $props();
</script>

<header class="relative overflow-hidden bg-[linear-gradient(135deg,#0f0f1a_0%,#1a1a2e_50%,#16213e_100%)] px-6 py-20 text-center">
  <!-- radial glow -->
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-5%,rgba(108,99,255,.38)_0%,transparent_70%)]"></div>

  <!-- Avatar -->
  <div class="animate-glow relative mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#6c63ff] to-[#43e97b] text-5xl">
    👨‍💻
  </div>

  <h1 class="text-gradient text-4xl font-extrabold tracking-tight md:text-5xl">
    {profile.name}
  </h1>

  <p class="mt-3 text-lg text-[#8892a4]">
    {profile.role} ·
    <span class="font-semibold text-[#43e97b]">{profile.tagline}</span>
  </p>

  <!-- Contact buttons -->
  <div class="mt-8 flex flex-wrap justify-center gap-3">
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener"
      class="inline-flex items-center gap-2 rounded-full bg-[#0077b5] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
      </svg>
      LinkedIn
    </a>

    <a
      href={profile.github}
      target="_blank"
      rel="noopener"
      class="inline-flex items-center gap-2 rounded-full border border-[#444] bg-[#24292e] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      GitHub
    </a>

    <a
      href="mailto:{profile.email}"
      class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#a78bfa] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
    >
      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
      {profile.email}
    </a>
  </div>
</header>
