<script lang="ts">
    /**
     * A component that displays a hover card with information about a term.
     *
     * @prop href - The URL of the website that defines the term.
     * @prop trigger - A string that represents the text that triggers the hover card.
     * @prop content - A list of paragraphs (strings) that are displayed in the hover card.
     * @prop citation - An object that represents the citation of the term.
     * @prop citation.title - A string that represents the title of the citation.
     * @prop citation.date - A string that represents the date of the citation. (yyyy-mm-dd)
     */
    import * as HoverCard from "$lib/components/ui/hover-card/index.js";
    import { formatDate } from "$lib/utils";
    
    export let trigger = "based";
    export let href = "https://www.urbandictionary.com/define.php?term=based";
    export let content = [
        "A word used when you agree with something; or when you want to recognize someone for being themselves, i.e. courageous and unique or not caring what others think. Especially common in online political slang.",
        "The opposite of cringe, some times the opposite of biased."
    ];
    export let citation = {
        title: "Urban Dictionary",
        date: "2024-07-29",
        href: "https://www.urbandictionary.com/define.php?term=based"
    };
</script>

<HoverCard.Root openDelay={150}>
    <HoverCard.Trigger
        target="_blank"
        rel="noreferrer noopener"
        class="
            font-robomo
            text-primary
            hover:text-primary/80
            hover:underline
            underline-offset-2
            md:underline-offset-4
            decoration-2
            decoration-primary/40
            font-semibold
        "
    >
        <a href={href} target="_blank" rel="noreferrer noopener">{trigger}</a>
    </HoverCard.Trigger>
    <HoverCard.Content
        class="
            w-1/3
            mt-0.5
            px-5
            py-4
        "
    >
        <div class="relative">
            <div class="relative space-y-2 max-h-80 overflow-y-auto">
                {#each content as paragraph}
                    <p class="mb-4">{paragraph}</p>
                {/each}
            </div>
            
            <div class="absolute bottom-0 bg-gradient-to-t from-card w-full h-3"></div>
        </div>

        <div class="text-muted-foreground text-sm">
            <hr class="mt-3 mb-4"/>
            <div class="flex justify-between items-center">
                <a href={citation.href} class="font-robomo text-left truncate max-w-xs">
                    {citation.title}
                </a>
                <span class="font-robomo text-right">
                    {formatDate(citation.date)}
                </span>
            </div>
        </div>
    </HoverCard.Content>
</HoverCard.Root>
