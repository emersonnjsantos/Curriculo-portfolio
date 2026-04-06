<script lang="ts">
  let { education }: { education: { degree: string; school: string; period: string } } = $props();
</script>

<section class="fade-in rounded-xl border border-[rgba(108,99,255,.25)] bg-[#1a1a2e] p-6">
  <h2 class="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6c63ff]">
    🎓 Educação
    <span class="ml-2 h-px flex-1 bg-[rgba(108,99,255,.25)]"></span>
  </h2>

  <div class="flex items-start gap-4">
    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#43e97b] text-xl">
      🎓
    </div>
    <div>
      <p class="font-bold text-white">{education.degree}</p>
      <p class="mt-0.5 text-sm text-[#8892a4]">{education.school}</p>
      <p class="mt-1 text-xs font-semibold tracking-wide text-[#43e97b]">{education.period}</p>
    </div>
  </div>
</section>
