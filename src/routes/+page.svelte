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

  <HeroSection/>

  <!-- Features section -->
  <section id="features" class="container pt-4 md:pt-16 mt-4">
    <h2 class="font-robomo text-4xl font-bold mb-8">Features</h2>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">

      <div><img src="https://placeimg.com/500/300/arch" alt="feature 1" /></div>

      <Card.Root class="bg-background/80">
        <Card.Header>
          <Card.Title class="font-robomo mb-2 text-xl">Personalized Learning Paths</Card.Title>
          <Card.Description>Unlock Your Unique Journey</Card.Description>
        </Card.Header>
        <Card.Content>
          Explore learning at your own pace, tailored to your passions and needs. 
          With Murof, you can create a personalized learning path that adapts as you grow. 
          Whether you're diving deep into a specific topic or exploring new horizons, we'll help you stay on track. 🚀
        </Card.Content>
        <Card.Footer>
          <div class="w-full text-muted-foreground hover:text-foreground/70">
            <a href="/auth/register">No more getting lost in a sea of information - your journey, your way</a>
          </div>
        </Card.Footer>
      </Card.Root>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">

      <div><img src="https://placeimg.com/500/300/arch" alt="feature 1" /></div>

      <Card.Root class="bg-background/80">
        <Card.Header>
          <Card.Title class="font-robomo mb-2 text-xl">Map Your Knowledge, Never Lose It Again</Card.Title>
          <Card.Description>Connect the Dots of Your Understanding</Card.Description>
        </Card.Header>
        <Card.Content>
          Murof lets you map out your knowledge, linking ideas, notes, and resources into an interconnected web. 
          You can easily revisit and expand your understanding whenever you need. 
          It's like having a second brain that remembers everything for you. 🧠
        </Card.Content>
        <Card.Footer>
          <div class="w-full text-muted-foreground hover:text-foreground/70">
            <a href="/auth/register">Forget about forgetting and start thinking about what matters</a>
          </div>
        </Card.Footer>
      </Card.Root>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">

      <div><img src="https://placeimg.com/500/300/arch" alt="feature 1" /></div>

      <Card.Root class="bg-background/80">
        <Card.Header>
          <Card.Title class="font-robomo mb-2 text-xl">Find Friends and Cooperators Through Shared Interests</Card.Title>
          <Card.Description>Community-Driven Connections</Card.Description>
        </Card.Header>
        <Card.Content>
          Learning is better together. 
          With Murof, you can find and connect with like-minded people who share your interests 
          (or don't) and collaborate on projects, exchange ideas, or just vibe. 🥰
        </Card.Content>
        <Card.Footer>
          <div class="w-full text-muted-foreground hover:text-foreground/70">
            <a href="/auth/register">Turn your passions into connections and friendships that last</a>
          </div>
        </Card.Footer>
      </Card.Root>
    </div>

  </section>

  <!-- Plans section -->
  <section id="plans" class="container pt-4 md:pt-16">
    <h2 class="font-robomo text-4xl font-bold mb-8">Plans</h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <Card.Root class="bg-background/35">
        <Card.Header>
          <Card.Title class="font-robomo mb-2 text-xl">Basic Plan</Card.Title>
          <Card.Description>Start Your Learning Journey for Free</Card.Description>
        </Card.Header>
        <Card.Content>
         <div class="px-4">
          <ul class="list-disc space-y-2">
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Learning Journeys
              </span>
              Begin mapping your personalized learning paths.</p>
            </li>
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Store Your Knowledge
              </span>
              Save, organize, and revisit your learning material anytime.</p>
            </li>
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Limited API Access
              </span>
              Get a taste of Murof's powerful tools with basic access to the Knowledge Graph API.</p>
            </li>
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Pay-As-You-Go
              </span>
              Need more? Expand your access with pay-as-you-go API requests.</p>
            </li>
          </ul>
        </div>
        </Card.Content>
        <Card.Footer>
          <div class="w-full text-muted-foreground hover:text-foreground/70">
            <Button href="/auth/register">Start for Free</Button>
            <Button class="mt-4 md:ml-2" variant="outline" href="/docs">See documentation</Button>
          </div>
        </Card.Footer>
      </Card.Root>

      <Card.Root class="bg-background/60">
        <Card.Header>
          <Card.Title class="font-robomo mb-2 text-xl">Based Plan</Card.Title>
          <Card.Description>Elevate Your Experience with Advanced Features</Card.Description>
        </Card.Header>
        <Card.Content>
         <div class="px-4">
          <ul class="list-disc space-y-2">
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Monthly Subscription
              </span>
              Unlock the full potential of Murof with a premium experience.</p>
            </li>
            <li>
              <p class="text-muted-foreground">
                <span class="text-robomo text-md font-bold text-accent-foreground">
                  Knowledge Dumping
                </span>
                Seamlessly integrate vast amounts of information into your knowledge map.
              </p>
            </li>
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Generative AI
              </span>
              Get assistance from cutting-edge AI to generate insights and content.
            </p>
            </li>
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Advanced Learning Paths
              </span>
              Discover and follow curated, expert-designed learning paths.
            </p>
            </li>
          </ul>
        </div>
        </Card.Content>
        <Card.Footer>
          <div class="w-full text-muted-foreground hover:text-foreground/70">
            <Button href="/auth/register">Go Based</Button>
            <Button class="mt-4 ml-2" variant="outline" href="/docs/api">API docs</Button>
          </div>
        </Card.Footer>
      </Card.Root>

      <Card.Root class="bg-background">
        <Card.Header>
          <Card.Title class="font-robomo mb-2 text-xl">Cooperator Plan</Card.Title>
          <Card.Description>Own, Govern, and Shape the Future of Murof</Card.Description>
        </Card.Header>
        <Card.Content>
         <div class="px-4">
          <ul class="list-disc space-y-2">
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Yearly Membership
              </span>
              Become a co-owner of the platform with a commitment to our community's future.</p>
            </li>
            <li>
              <p class="text-muted-foreground">
                <span class="text-robomo text-md font-bold text-accent-foreground">
                  Voting Rights
                </span>
                Participate in major decisions about the platform's direction.
              </p>
            </li>
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Administrative Access
              </span>
              Gain deeper involvement in the cooperative's operations.
            </p>
            </li>
            <li>
              <p class="text-muted-foreground">
              <span class="text-robomo text-md font-bold text-accent-foreground">
                Shape the Future
              </span>
              Be part of a movement that's reshaping education for everyone.
            </p>
            </li>
          </ul>
        </div>
        </Card.Content>
        <Card.Footer>
          <div class="w-full text-muted-foreground hover:text-foreground/70">
            <Button href="/auth/register">Become a Cooperator</Button>
            <Button class="mt-4 md:ml-2" variant="outline" href="/docs/coop">Coop docs</Button>
          </div>
        </Card.Footer>
      </Card.Root>

    </div>
  </section>

  <!-- FAQ section -->
  <section id="faq" class="container py-12 md:pt-16">
    <h2 class="font-robomo text-4xl font-bold mb-8">FAQs</h2>
    <Accordion.Root class="w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is Murof like an e-learning?</Accordion.Trigger>
        <Accordion.Content>
          <div class="font-bold text-accent-foreground pb-1">
            Short Answer: No.
          </div>
          Murof is a community-driven platform that combines a knowledge graph, social networking, and cooperative governance to create a unique educational environment. Yes, we are utilizing online infrastructure to achieve some of these goals, but the learning and teaching experience can be as online or offline as you'd like it to be.
          <div class="italic text-muted-foreground pt-4">
            An educational experience for everyone.
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is Murof fully functional?</Accordion.Trigger>
        <Accordion.Content>
          <div class="font-bold text-accent-foreground pb-1">
            Short Answer: Not yet.
          </div>
          Murof is still in the early stages of development. 
          Many features are in progress, and some pages might not work as expected. 
          But that's where you come in - your feedback and involvement are crucial in shaping the platform.
          <div class="italic text-muted-foreground pt-4">
            Join us in building the future, one step at a time.
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>How can I contribute to Murof?</Accordion.Trigger>
        <Accordion.Content>
          We're all about the cooperative spirit! Whether you're a developer, educator, or just passionate about our mission, there are many ways to get involved:
          <div class="p-4">
            <ul class="list-disc space-y-2">
              <li>
                <p class="text-muted-foreground">
                  <span class="text-robomo text-md font-bold text-accent-foreground">
                    Testing and Feedback
                  </span>
                  Help us refine Murof by testing features and providing your insights.
                </p>
              </li>
              <li>
                <p class="text-muted-foreground">
                  <span class="text-robomo text-md font-bold text-accent-foreground">
                    Feature Requests
                  </span>
                  Suggest tools and features that would make Murof even better for learners and educators.
                </p>
              </li>
              <li>
                <p class="text-muted-foreground">
                  <span class="text-robomo text-md font-bold text-accent-foreground">
                    Development
                  </span>
                  Contribute to the code, or bring your expertise in HR, legal, and other areas.
                </p>
              </li>
            </ul>
          </div>
          <span class="italic text-muted-foreground">
            Your voice matters in shaping Murof into a platform that truly serves the community.
          </span>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-4">
        <Accordion.Trigger>What's a cooperative platform?</Accordion.Trigger>
        <Accordion.Content>
          Murof isn't just another app - it's a movement. 
          As a <a href="https://en.wikipedia.org/wiki/Platform_cooperative" class="underline">cooperative platform</a> , we're owned and governed by our users. That's you!
          This means everyone has a say in how we grow and evolve. We believe that education should be accessible, fair, and driven by those who use it.
          <div class="italic text-muted-foreground pt-4">
            Join us in redefining what it means to learn and grow together.
          </div>
        </Accordion.Content>
      </Accordion.Item>

    </Accordion.Root>


  </section>

</div>

<Footer />