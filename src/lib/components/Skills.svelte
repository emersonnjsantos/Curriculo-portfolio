<script lang="ts">
  import type { SkillGroup } from '$lib/data';

  let { skillGroups, cloudProviders, mernStack }: {
    skillGroups: SkillGroup[];
    cloudProviders: { icon: string; name: string }[];
    mernStack: { icon: string; name: string }[];
  } = $props();

  const colorMap: Record<string, string> = {
    purple: 'bg-[rgba(108,99,255,.15)] border-[rgba(108,99,255,.3)] text-[#c4b5fd] hover:bg-[rgba(108,99,255,.3)]',
    green:  'bg-[rgba(67,233,123,.1)]  border-[rgba(67,233,123,.3)]  text-[#6ee7b7] hover:bg-[rgba(67,233,123,.25)]',
    blue:   'bg-[rgba(56,182,255,.1)]  border-[rgba(56,182,255,.3)]  text-[#93c5fd] hover:bg-[rgba(56,182,255,.25)]',
    orange: 'bg-[rgba(251,146,60,.1)]  border-[rgba(251,146,60,.3)]  text-[#fdba74] hover:bg-[rgba(251,146,60,.25)]',
    pink:   'bg-[rgba(244,114,182,.1)] border-[rgba(244,114,182,.3)] text-[#f9a8d4] hover:bg-[rgba(244,114,182,.25)]',
  };
</script>

<!-- Skills -->
<section class="fade-in rounded-xl border border-[rgba(108,99,255,.25)] bg-[#1a1a2e] p-6">
  <h2 class="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6c63ff]">
    🛠 Habilidades
    <span class="ml-2 h-px flex-1 bg-[rgba(108,99,255,.25)]"></span>
  </h2>

  {#each skillGroups as group}
    <div class="mb-4">
      <p class="mb-2 text-[.7rem] font-semibold uppercase tracking-widest text-[#8892a4]">{group.label}</p>
      <div class="flex flex-wrap gap-2">
        {#each group.items as skill}
          <span class="cursor-default rounded-full border px-3 py-1 text-xs font-medium transition hover:-translate-y-0.5 {colorMap[group.color] ?? colorMap.purple}">
            {skill}
          </span>
        {/each}
      </div>
    </div>
  {/each}
</section>

<!-- Cloud -->
<section class="fade-in mt-5 rounded-xl border border-[rgba(108,99,255,.25)] bg-[#1a1a2e] p-6">
  <h2 class="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6c63ff]">
    ☁️ Cloud
    <span class="ml-2 h-px flex-1 bg-[rgba(108,99,255,.25)]"></span>
  </h2>
  <div class="flex flex-wrap gap-2">
    {#each cloudProviders as p}
      <span class="inline-flex cursor-default items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium transition hover:bg-white/10 hover:-translate-y-0.5">
        {p.icon} {p.name}
      </span>
    {/each}
  </div>
</section>

<!-- MERN Stack -->
<section class="fade-in mt-5 rounded-xl border border-[rgba(108,99,255,.25)] bg-[#1a1a2e] p-6">
  <h2 class="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6c63ff]">
    ⚡ MERN Stack
    <span class="ml-2 h-px flex-1 bg-[rgba(108,99,255,.25)]"></span>
  </h2>
  <div class="flex flex-wrap gap-2">
    {#each mernStack as item}
      <span class="inline-flex cursor-default items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium transition hover:bg-white/10 hover:-translate-y-0.5">
        {item.icon} {item.name}
      </span>
    {/each}
  </div>
</section>
