<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
</script>

<div class="container h-screen">
    
    <h2 class="font-robomo text-4xl font-bold m-8">
        Murof is three things
    </h2>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 mb-6">
        <Card.Root class="flex flex-col">
            <Card.Header>
                <Card.Title class="font-robomo mb-2 text-xl">An Interconnected Knowledgebase</Card.Title>
                <Card.Description>Meet the Murof Knowledge Graph API</Card.Description>
            </Card.Header>
            <Card.Content class="flex-grow">
                <p class="mb-3">Imagine a web of informative concepts, notes, slides and videos - where anyone can contribute and benefit. That's us - a free, open, and community-driven graph connecting ideas like never before.</p>
                <p class="mb-1">With our API and cutting-edge LLM tech, you can seamlessly link, search, and share knowledge across any domain or language. It's like the internet, but smarter and way cooler 😎</p>
            </Card.Content>
            <Card.Footer>
                <Button href="/docs/api">Dive into the API</Button>
            </Card.Footer>
        </Card.Root>
    
        <Card.Root class="flex flex-col">
            <Card.Header>
                <Card.Title class="font-robomo mb-2 text-xl">A Hub for Shared Interests</Card.Title>
                <Card.Description>Join the Murof Community</Card.Description>
            </Card.Header>
            <Card.Content class="flex-grow">
                <p class="mb-3">Looking to connect with fellow enthusiasts or collaborators? Murof is your go-to place for finding like-minded people and making meaningful connections.</p>
                <p class="mb-1">Whether you're learning, teaching, or just vibing, we're building a space where passion meets collaboration 🤩</p>
            </Card.Content>
            <Card.Footer>
                <Button href="/docs/blog">Check out the Blog</Button>
            </Card.Footer>
        </Card.Root>
    
        <Card.Root class="flex flex-col">
            <Card.Header>
                <Card.Title class="font-robomo mb-2 text-xl">A Cooperative Platform Owned & Governed by You</Card.Title>
                <Card.Description>The Future of Learning Starts Here</Card.Description>
            </Card.Header>
            <Card.Content class="flex-grow">
                <p class="mb-3">Murof is designed as a platform-coop, meaning that it is user-owned and governed. Whether you're learning or teaching, you're in control.</p>
                <p class="mb-1">Together, we're crafting a fair platform that's not just another tool, but a community-driven movement for accessible education 😮</p>
            </Card.Content>
            <Card.Footer>
                <Button href="/docs/coop">Become a Cooperator</Button>
            </Card.Footer>
        </Card.Root>
    </div>
    
</div>
