<script>
    import Logo from '$lib/components/nav/Logo.svelte';
    import { SquarePen, House, Search, MessagesSquare, User, Calendar, Blocks, Settings, BellRing } from "lucide-svelte/icons";
    import ToggleMode from '$lib/components/ToggleMode.svelte';
</script>

<div class="w-screen md:w-auto md:max-w-23 bg-black">
    <div class="flex items-center justify-center">
        <Logo />
        <ToggleMode />
    </div>
</div>