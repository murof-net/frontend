<script lang="ts">
    // UI components
    import { CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button";
</script>

<CardHeader>
    <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
        Authentication
    </CardTitle>
    <CardDescription class="text-balance text-muted-foreground p-1 text-center">
        Welcome, please register if you are new or login if you already have an account
    </CardDescription>
</CardHeader>
<CardContent>
    <div class="grid gap-4">
        <div class="my-1 pt-3 grid gap-5">
            <div class="flex gap-4">
                <a class="w-[50%]" href="/auth/register">
                    <Button class="w-full" variant="outline">Register</Button>
                </a>
                <a class="w-[50%]" href="/auth/login">
                    <Button class="w-full">Login</Button>
                </a>
            </div>
        </div>
    </div>
</CardContent>
