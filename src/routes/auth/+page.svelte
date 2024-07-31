<script lang="ts">
    // UI components
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button";
    // import AlternativeAuth from "$lib/components/sections/AlternativeAuth.svelte";
    import TermsAndPrivacy from "$lib/components/sections/TermsAndPrivacy.svelte";
</script>

<div class="w-full">
    <div class="md:py-12 flex justify-center items-center">
        <Card class="p-4 m-4">
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
        <CardFooter class="flex justify-center">
            <TermsAndPrivacy />
        </CardFooter>
        </Card>
    </div>
</div>
