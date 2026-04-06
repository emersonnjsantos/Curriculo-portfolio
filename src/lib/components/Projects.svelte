<script lang="ts">
  import type { Project } from '$lib/data';

  let { projects }: { projects: Project[] } = $props();
</script>

<section class="fade-in rounded-xl border border-[rgba(108,99,255,.25)] bg-[#1a1a2e] p-6">
  <h2 class="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6c63ff]">
    🚀 Projetos em Destaque
    <span class="ml-2 h-px flex-1 bg-[rgba(108,99,255,.25)]"></span>
  </h2>

  <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {#each projects as proj}
      <article class="group relative overflow-hidden rounded-xl border border-[rgba(108,99,255,.2)] bg-[#16213e] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(108,99,255,.55)] hover:shadow-[0_12px_40px_rgba(108,99,255,.2)]">
        <!-- top accent bar -->
        <span class="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6c63ff] to-[#43e97b] opacity-0 transition duration-300 group-hover:opacity-100"></span>

        <div class="mb-3 text-3xl">{proj.icon}</div>

        <h3 class="mb-1.5 text-sm font-bold text-white">
          <a
            href={proj.url}
            target="_blank"
            rel="noopener"
            class="transition hover:text-[#43e97b]"
          >
            {proj.title} ↗
          </a>
        </h3>

        <p class="mb-4 text-xs leading-relaxed text-[#8892a4]">{proj.description}</p>

        <div class="flex flex-wrap gap-1.5">
          {#each proj.tags as tag}
            <span class="rounded-full border border-[rgba(108,99,255,.25)] bg-[rgba(108,99,255,.15)] px-2.5 py-0.5 font-mono text-[.65rem] text-[#c4b5fd]">
              {tag}
            </span>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
