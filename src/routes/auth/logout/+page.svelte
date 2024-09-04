<script lang="ts">
    // UI components
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import { Button } from "$lib/components/ui/button";
</script>

<div class="w-full">
    <div class="md:py-12 flex justify-center items-center">
        <Card class="p-4 m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
                Logout
            </CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                Click the button below to logout
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">
                <div class="my-1 pt-3 grid gap-5">
                    <form method="POST">
                        <Button type="submit" class="w-full">Logout now</Button>
                    </form>
                </div>
            </div>
        </CardContent>
        </Card>
    </div>
</div>
