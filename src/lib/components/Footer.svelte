<script lang="ts">
  let { github, name }: { github: string; name: string } = $props();
</script>

<footer class="border-t border-[rgba(108,99,255,.2)] py-8 text-center text-xs text-[#8892a4]">
  Desenvolvido por
  <a href={github} target="_blank" rel="noopener" class="text-[#6c63ff] hover:underline">{name}</a>
  · {new Date().getFullYear()}
</footer>
