<script lang="ts">
  import HeroSection from "$lib/components/custom/HeroSection.svelte";

  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import * as Menubar from "$lib/components/ui/menubar";

  import { toggleMode } from "mode-watcher";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";

  const year = new Date().getFullYear();
</script>

<header class="sticky top-0 z-50 w-full p-3 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <Menubar.Root class="border-none bg-transparent">
    <div class="container flex max-w-9xl items-center p-1">
      <Menubar.Menu>

        <Menubar.Item class="hidden text-foreground/70 transition-colors hover:text-foreground/85 lg:block pr-8">
          <a href="#features">Features</a>
        </Menubar.Item>
        <Menubar.Item class="hidden text-foreground/70 transition-colors hover:text-foreground/85 lg:block pr-8">
          <a href="#pricing">Plans</a>
        </Menubar.Item>
        <Menubar.Item class="hidden text-foreground/70 transition-colors hover:text-foreground/85 lg:block pr-8">
          <a href="#faq">FAQ</a>
        </Menubar.Item>

        <div class="w-full flex justify-between md:float-right md:justify-end">
          <Menubar.Item>
            <Button on:click={toggleMode} variant="outline">
              <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
              <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
              <span class="sr-only">Toggle theme</span>
            </Button>
          </Menubar.Item>
          <Menubar.Item>
            <a href="/blog">
              <Button variant="outline">Learn more</Button>
            </a>
          </Menubar.Item>
          <Menubar.Item>
            <a href="/auth">
              <Button variant="default">Start now</Button>
            </a>
          </Menubar.Item>
        </div>

      </Menubar.Menu>
    </div>
  </Menubar.Root>
</header>

<HeroSection />

<!-- Features section -->
<section id="features" class="container mt-16">
  <h2 class="font-robomo text-4xl font-bold mb-8">Features</h2>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">
    <div><img src="https://placeimg.com/500/300/arch" alt="feature 1" /></div>
    <Card.Root class="bg-base-100">
      <Card.Header>
        <Card.Title>Feature 1</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Description>
      </Card.Header>
      <Card.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Content>
      <Card.Footer><Button>Get started</Button></Card.Footer>
    </Card.Root>
  </div>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 pb-9">
    <div><img src="https://placeimg.com/500/300/arch" alt="feature 2" /></div>
    <Card.Root class="bg-base-100">
      <Card.Header>
        <Card.Title>Feature 2</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Description>
      </Card.Header>
    </Card.Root>
  </div>
</section>

<!-- Pricing section -->
<section id="pricing" class="container mt-16">
  <h2 class="font-robomo text-4xl font-bold mb-8">Pricing</h2>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <Card.Root class="bg-base-100">
      <Card.Header>
        <Card.Title>Pricing 1</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Description>
      </Card.Header>
    </Card.Root>
    <Card.Root class="bg-base-100">
      <Card.Header>
        <Card.Title>Pricing 2</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Description>
      </Card.Header>
    </Card.Root>
    <Card.Root class="bg-base-100">
      <Card.Header>
        <Card.Title>Pricing 3</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card.Description>
      </Card.Header>
    </Card.Root>
  </div>
</section>

<!-- Footer -->
<footer class="container mt-16">
  <p class="text-center">© {year} murof</p>
</footer>
