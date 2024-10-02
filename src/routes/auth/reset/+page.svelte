<script lang="ts">
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Password Reset
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        Enter your identifier to request a password reset
    </CardDescription>
</CardHeader>
<CardContent>
    <form method="POST">
        <p class="text-accent-foreground p-1 font-robomo">Identifier</p>
        <div class="grid gap-2 py-2">
            <Input type="identifier" name="identifier" id="identifier" placeholder="Username or email" required/>
        </div>

        <div class="text-center">
            <Button type="submit" class="mt-6 mb-2 w-full md:w-1/2" variant="default">
                <span class="text-background">Request Password Reset</span>
            </Button>
        </div>
    </form>
</CardContent>