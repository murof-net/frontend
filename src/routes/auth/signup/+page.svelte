<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import { Input } from "$lib/components/ui/input"
    import { Label } from "$lib/components/ui/label"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
</script>


<div class="flex flex-col items-center justify-center h-screen bg-base-100 lg:flex-row">
    <div class="order-1 w-full lg:w-1/2">
        <div class="flex justify-center items-start">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
            src=""
            alt="This is a placeholder image"
            width="1920"
            height="1080"
            class="h-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    </div>

    <div class="order-2 w-full lg:w-1/2">
        <div class="flex justify-center items-start">
        <Card class="p-4">
            <CardHeader>
                <CardTitle class="font-robomo text-3xl font-bold">Sign up</CardTitle>
                <CardDescription class="text-balance text-muted-foreground">
                    Enter your details to create your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a
                                href="/forgot-password"
                                class="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button class="w-full">
                        Login
                    </Button>
                    <Button variant="outline" class="w-full">
                        Login with Google
                    </Button>
                </div>
            </CardContent>
            <CardFooter>
                <a href="/" class="underline">
                    Don&apos;t have an account? Sign up
                </a>
            </CardFooter>
        </Card>
        </div>
    </div>
</div>
