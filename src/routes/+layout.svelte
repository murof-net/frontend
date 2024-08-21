<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import { inject } from '@vercel/analytics'
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    injectSpeedInsights();
</script>
   
<ModeWatcher />

<slot />

<style>
</style>