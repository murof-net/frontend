<script lang="ts">
    const year = new Date().getFullYear();
</script>

<footer class="py-5 bg-background/95">
    <div class="container">
        <!-- grid with site sections -->
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex flex-col">
                <h3 class="text-lg font-semibold text-accent-foreground">About</h3>
                <ul class="mt-2">
                    <li class="text-sm text-accent-foreground/75">Blog</li>
                    <li class="text-sm text-accent-foreground/75">Manifesto</li>
                    <li class="text-sm text-accent-foreground/75">Privacy Policy</li>
                    <li class="text-sm text-accent-foreground/75">Terms of Service</li>
                </ul>
            </div>
            <div class="flex flex-col">
                <h3 class="text-lg font-semibold text-accent-foreground">Contact</h3>
                <ul class="mt-2">
                    <li class="text-sm text-accent-foreground/75">Partnerships</li>
                    <li class="text-sm text-accent-foreground/75">Support</li>
                    <li class="text-sm text-accent-foreground/75">Legal</li>
                    <li class="text-sm text-accent-foreground/75">Careers</li>
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

            <div class="grid grid-cols-3 justify-items-center md:flex md:items-center md:justify-end">
                <!-- viewbox 24 icons from: https://icons8.com/icon/set/logos/material -->
                <a href="https://github.com/murof-net" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 12 4 C 16.410156 4 20 7.589844 20 12 C 20 12.46875 19.953125 12.929688 19.875 13.375 C 19.628906 13.320313 19.265625 13.253906 18.84375 13.25 C 18.53125 13.246094 18.140625 13.296875 17.8125 13.34375 C 17.925781 12.996094 18 12.613281 18 12.21875 C 18 11.257813 17.53125 10.363281 16.78125 9.625 C 16.988281 8.855469 17.191406 7.535156 16.65625 7 C 15.074219 7 14.199219 8.128906 14.15625 8.1875 C 13.667969 8.070313 13.164063 8 12.625 8 C 11.933594 8 11.273438 8.125 10.65625 8.3125 L 10.84375 8.15625 C 10.84375 8.15625 9.964844 6.9375 8.34375 6.9375 C 7.777344 7.507813 8.035156 8.953125 8.25 9.6875 C 7.484375 10.417969 7 11.28125 7 12.21875 C 7 12.546875 7.078125 12.859375 7.15625 13.15625 C 6.878906 13.125 5.878906 13.03125 5.46875 13.03125 C 5.105469 13.03125 4.542969 13.117188 4.09375 13.21875 C 4.03125 12.820313 4 12.414063 4 12 C 4 7.589844 7.589844 4 12 4 Z M 5.46875 13.28125 C 5.863281 13.28125 7.0625 13.421875 7.21875 13.4375 C 7.238281 13.492188 7.257813 13.542969 7.28125 13.59375 C 6.851563 13.554688 6.019531 13.496094 5.46875 13.5625 C 5.101563 13.605469 4.632813 13.738281 4.21875 13.84375 C 4.1875 13.71875 4.148438 13.597656 4.125 13.46875 C 4.5625 13.375 5.136719 13.28125 5.46875 13.28125 Z M 18.84375 13.5 C 19.242188 13.503906 19.605469 13.570313 19.84375 13.625 C 19.832031 13.691406 19.796875 13.746094 19.78125 13.8125 C 19.527344 13.753906 19.109375 13.667969 18.625 13.65625 C 18.390625 13.652344 18.015625 13.664063 17.6875 13.6875 C 17.703125 13.65625 17.707031 13.625 17.71875 13.59375 C 18.058594 13.546875 18.492188 13.496094 18.84375 13.5 Z M 6.09375 13.78125 C 6.65625 13.785156 7.183594 13.824219 7.40625 13.84375 C 7.929688 14.820313 8.988281 15.542969 10.625 15.84375 C 10.222656 16.066406 9.863281 16.378906 9.59375 16.75 C 9.359375 16.769531 9.113281 16.78125 8.875 16.78125 C 8.179688 16.78125 7.746094 16.160156 7.375 15.625 C 7 15.089844 6.539063 15.03125 6.28125 15 C 6.019531 14.96875 5.929688 15.117188 6.0625 15.21875 C 6.824219 15.804688 7.097656 16.5 7.40625 17.125 C 7.683594 17.6875 8.265625 18 8.90625 18 L 9.03125 18 C 9.011719 18.109375 9 18.210938 9 18.3125 L 9 19.40625 C 6.691406 18.472656 4.933594 16.5 4.28125 14.0625 C 4.691406 13.960938 5.152344 13.855469 5.5 13.8125 C 5.660156 13.792969 5.863281 13.777344 6.09375 13.78125 Z M 18.625 13.90625 C 19.074219 13.917969 19.472656 14.003906 19.71875 14.0625 C 19.167969 16.132813 17.808594 17.855469 16 18.90625 L 16 18.3125 C 16 17.460938 15.328125 16.367188 14.375 15.84375 C 15.957031 15.554688 16.988281 14.863281 17.53125 13.9375 C 17.910156 13.910156 18.355469 13.898438 18.625 13.90625 Z M 12.5 18 C 12.773438 18 13 18.226563 13 18.5 L 13 19.9375 C 12.671875 19.980469 12.339844 20 12 20 L 12 18.5 C 12 18.226563 12.226563 18 12.5 18 Z M 10.5 19 C 10.773438 19 11 19.226563 11 19.5 L 11 19.9375 C 10.664063 19.894531 10.324219 19.832031 10 19.75 L 10 19.5 C 10 19.226563 10.226563 19 10.5 19 Z M 14.5 19 C 14.742188 19 14.953125 19.175781 15 19.40625 C 14.675781 19.539063 14.34375 19.660156 14 19.75 L 14 19.5 C 14 19.226563 14.226563 19 14.5 19 Z"></path>
                    </svg>
                </a>
                <a href="https://www.discord.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M19.229,6.012c-0.903-0.73-2.015-1.246-2.872-1.572c-0.307-0.117-0.653-0.076-0.923,0.111C15.162,4.737,15,5.045,15,5.374	C15,5.72,14.72,6,14.374,6c-1.573,0-3.176,0-4.749,0C9.28,6,9,5.72,9,5.375c0-0.329-0.162-0.638-0.433-0.824	C8.296,4.364,7.95,4.323,7.643,4.441c-0.86,0.329-1.978,0.85-2.894,1.59C3.831,6.882,2,11.861,2,16.165	c0,0.076,0.019,0.15,0.057,0.216c1.265,2.233,4.714,2.817,5.499,2.842c0.005,0.001,0.009,0.001,0.014,0.001	c0.139,0,0.286-0.056,0.351-0.18l0.783-1.485c-0.646-0.164-1.313-0.359-2.04-0.617c-0.521-0.185-0.792-0.757-0.607-1.277	s0.758-0.791,1.277-0.607c3.526,1.254,5.624,1.253,9.345-0.005c0.525-0.175,1.092,0.104,1.268,0.627	c0.177,0.523-0.104,1.091-0.627,1.268c-0.728,0.246-1.392,0.434-2.035,0.594l0.793,1.503c0.065,0.124,0.213,0.18,0.351,0.18	c0.005,0,0.009,0,0.014-0.001c0.786-0.025,4.235-0.61,5.499-2.843C21.981,16.315,22,16.241,22,16.164	C22,11.861,20.169,6.882,19.229,6.012z M9.04,13.988c-0.829,0-1.5-0.893-1.5-1.996c0-1.102,0.671-1.996,1.5-1.996	c0.832-0.11,1.482,0.893,1.5,1.996C10.54,13.095,9.869,13.988,9.04,13.988z M14.996,14.012c-0.829,0-1.5-0.895-1.5-2s0.671-2,1.5-2	s1.5,0.895,1.5,2S15.825,14.012,14.996,14.012z"></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                    </svg>
                </a>
                <a href="https://x.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
                    </svg>
                </a>
                <a href="https://www.youtube.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                    </svg>
                </a>
                <a href="https://www.patreon.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M 2 3 L 2 21 L 6 21 L 6 3 L 2 3 z M 15 3 C 11.141 3 8 6.141 8 10 C 8 13.859 11.141 17 15 17 C 18.859 17 22 13.859 22 10 C 22 6.141 18.859 3 15 3 z"></path>
                    </svg>
                </a>
                <a href="https://www.facebook.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                    </svg>
                </a>
                <a href="https://www.tiktok.com" class="m-2 h-11 md:h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-accent-foreground/50 hover:text-accent-foreground/60" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
                    </svg>
                </a>

            </div>
        </div>
    </div>
</footer>
