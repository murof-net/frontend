<script lang="ts">
    // import type { PageData } from './$types'
    // export let data: PageData;

    // UI components
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
</script>

<div class="w-full">
    <div class="md:py-12 flex justify-center items-center">
        <Card class="md:p-4 md:m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
                Success
            </CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                Thank you for registering. 
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">
                Please check your email to verify your account.
            </div>
        </CardContent>
        </Card>
    </div>
</div>
