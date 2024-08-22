<script lang="ts">
  import { onMount } from "svelte";
  import Hover from "$lib/components/app/Hover.svelte";
  import { Button } from "$lib/components/ui/button";
  import { animateTyping } from "$lib/assets/animateTyping";
  import LogoSVG from "$lib/assets/murof_logo_square.svg?raw";
  import "$lib/assets/HeroAnimation.css"

  const words = ["on you",  "on knowledge", "on shared interests", "on learning", "on all of us", "on the real world"];
  let typingNode: HTMLElement;

  onMount(() => {
    if (typingNode) {
      animateTyping(typingNode, words);

      // Wait for SVG elements to be ready
      requestAnimationFrame(() => {
        const svgElements = document.querySelectorAll("svg .animate-me");
        svgElements.forEach((element) => {
          element.classList.add("start-animation");
        });
      });
    }
  });
</script>

<div class="flex flex-col items-center justify-center h-screen bg-base-100 lg:flex-row mt-[-2rem] md:mt-[-3rem] lg:mt-[-4.5rem] p-4">
  <div class="order-1 w-full lg:w-1/2">
    <div class="flex justify-center items-start">
      {@html LogoSVG}
    </div>
  </div>
  
  <div class="order-2 w-full lg:w-1/2 lg:max-w-[50%]">
    <div class="p-2 bg-base-100 rounded-md text-left md:pl-4 md:pr-12">
      <div class="container p-0">
      <div class="container p-0">
        <h1 class="font-robomo text-3xl lg:text-5xl font-bold mb-4 min-h-[3.6em] md:min-h-[3em]">
          Making education
          <Hover trigger="based"
          href="https://www.urbandictionary.com/define.php?term=based" content={[
              "A word used when you agree with something; or when you want to recognize someone for being themselves, i.e. courageous and unique or not caring what others think. Especially common in online political slang.",
              "The opposite of cringe, some times the opposite of biased.",
            ]} citation={{
              title: "Urban Dictionary", 
              date: "2024-07-29",
              href: "https://www.urbandictionary.com/define.php?term=based",
            }}
          />
          <span class="text-accent-foreground/70" bind:this={typingNode}></span>
        </h1>
      </div>
      <div class="container p-0">
        <p class="text-lg py-1 mb-6">
          Together, we fuel our curiosity with data-driven, personalized and collaborative thinking.
          Say goodbye to knowledge-in-a-vacuum and hello to learning with purpose!
        </p>
        <Button variant="default" class="mb-3 mr-6">
          <a href="/auth/register">Get started today</a>
        </Button>
        <Button variant="outline">
          <a href="/test">Watch our demo</a>
        </Button>
      </div>
    </div>
    </div>
  </div>
</div>