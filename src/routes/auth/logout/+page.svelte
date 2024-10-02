<script lang="ts">
    // UI components
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button";
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Logout
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        Click the button below to logout
    </CardDescription>
</CardHeader>
<CardContent>
    <div class="text-center">
        <Button class="mt-1 mb-2 w-full md:w-1/2" href="">Logout now</Button>
    </div>
</CardContent>