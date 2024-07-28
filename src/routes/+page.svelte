<script lang="ts">
  // Custom components
  import LandningNav from "$lib/components/nav/LandingNav.svelte";
  import HeroSection from "$lib/components/sections/Hero.svelte";
  import Footer from "$lib/components/sections/Footer.svelte";
  // Lib components
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";

</script>

<LandningNav subsections={[
  {label: "Features", href: "#features"}, 
  {label: "Plans", href: "#plans"}, 
  {label: "FAQ", href: "#faq"}]} 
/>

<div class="bg-gradient-to-br from-background to-accent/70 mt-[-4rem]">

  <HeroSection />

  <!-- Features section -->
  <section id="features" class="container pt-4 md:pt-16 mt-4">
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

  <!-- Plans section -->
  <section id="plans" class="container pt-4 md:pt-16">
    <h2 class="font-robomo text-4xl font-bold mb-8">Plans</h2>
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

  <!-- FAQ section -->
  <section id="faq" class="container py-12 md:pt-16">
    <h2 class="font-robomo text-4xl font-bold mb-8">FAQs</h2>
    <Accordion.Root class="w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content
          >Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content
        >
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </section>

</div>

<Footer />