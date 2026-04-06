<script lang="ts">
  import type { Experience } from '$lib/data';

  let { experiences }: { experiences: Experience[] } = $props();
</script>

<section class="fade-in rounded-xl border border-[rgba(108,99,255,.25)] bg-[#1a1a2e] p-6">
  <h2 class="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6c63ff]">
    💼 Experiência
    <span class="ml-2 h-px flex-1 bg-[rgba(108,99,255,.25)]"></span>
  </h2>

  <div class="timeline-line relative pl-6">
    {#each experiences as exp}
      <div class="relative mb-7 last:mb-0">
        <!-- dot -->
        <span class="absolute -left-[1.15rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#6c63ff] shadow-[0_0_10px_#6c63ff]"></span>

        <p class="mb-0.5 text-[.7rem] font-semibold uppercase tracking-widest text-[#43e97b]">{exp.period}</p>
        <p class="text-base font-bold text-white">{exp.role}</p>
        <p class="mb-3 text-sm text-[#8892a4]">{exp.org}</p>

        <ul class="space-y-1.5">
          {#each exp.bullets as bullet}
            <li class="relative pl-4 text-sm text-[#e2e8f0] before:absolute before:left-0 before:top-[.45rem] before:text-[.6rem] before:text-[#6c63ff] before:content-['▸']">
              {bullet}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
