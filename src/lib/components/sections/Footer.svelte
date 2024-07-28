<script lang="ts">
    const year = new Date().getFullYear();
    import Socials from "$lib/components/nav/Socials.svelte";
</script>

<footer class="pb-5 pt-7 bg-background/95">
    <div class="container">
        <!-- grid with site sections -->
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="flex flex-col">
                <h3 class="text-lg font-semibold text-accent-foreground">About</h3>
                <ul class="mt-2">
                    <li class="text-sm text-accent-foreground/75">
                        <a href="/docs">Documentation</a>
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        <a href="/docs/coop">DAO Co-op</a>
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        <a href="/docs/api">API docs</a>
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        <a href="/docs/blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col">
                <h3 class="text-lg font-semibold text-accent-foreground">Legal</h3>
                <ul class="mt-2">
                    <li class="text-sm text-accent-foreground/75">
                        Contact Legal
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        <a href="/docs/terms">Terms of Service</a>
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        <a href="/docs/privacy">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col">
                <h3 class="text-lg font-semibold text-accent-foreground">Contact</h3>
                <ul class="mt-2">
                    <li class="text-sm text-accent-foreground/75">
                        Partnerships
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        Support
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        Careers
                    </li>
                    <li class="text-sm text-accent-foreground/75">
                        Developers
                    </li>
                </ul>
            </div>
            <div class="flex flex-col">
                <h3 class="text-lg font-semibold text-accent-foreground">Notice</h3>
                <p class="text-sm text-accent-foreground/75">
                    Murof is an accelerator program start-up project at <a href="https://do.ugent.be/en/nieuws/expedition-do-2024-sets-sail/">DO!</a>
                    and is currently under active development. Follow our social media for updates.
                </p>
            </div>
        </div>

        <!-- divider -->
        <hr class="border-t border-accent-foreground/25 my-4">
        

        <!-- All rights reserved and social media links -->

        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            
            <div class="flex justify-center md:justify-start mb-4 md:mb-0">
                <p class="text-sm text-accent-foreground/50 lg:text-left text-center">
                    &copy; {year} Murof. All rights reserved.
                </p>
            </div>

            <Socials />
            
        </div>
    </div>
</footer>
