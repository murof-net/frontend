<script lang="ts">
    import type { PageData } from "./$types"
    
    // Form validation
    import { zod } from 'sveltekit-superforms/adapters';
    import { registerSchema, languagesEnum } from "../auth-schemas";
    import { superForm } from "sveltekit-superforms/client"
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    
    // UI components
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import * as Select from "$lib/components/ui/select/index.js";
    // import AlternativeAuth from "$lib/components/sections/AlternativeAuth.svelte";
    import TermsAndPrivacy from "$lib/components/sections/TermsAndPrivacy.svelte";

    export let data: PageData;
    const { form, errors, enhance, constraints } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave this page? Changes may not be saved",
        validators: zod(registerSchema),
        });
    
    $: selectedLanguages = $form.languages.map(lang => ({ label: lang, value: lang }));
</script>

<div class="w-full">
    <div class="md:py-12 flex justify-center items-center">
        <Card class="md:p-4 md:m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
                Register
            </CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                Enter your details to create an account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="grid gap-4">
                <!-- <div class="container">
                    <SuperDebug data={$form}/>
                </div> -->
                
                <form method="POST" use:enhance>
                    <div class="pb-2">
                        <p class="text-accent-foreground p-1 font-robomo">General information</p>
                        <div class="grid md:grid-cols-2 gap-2 py-2">
                            <div>
                                <Input type="text" name="firstName" id="firstName" placeholder="Frist name" required
                                bind:value={$form.firstName} {...$constraints.firstName}/>
                                {#if $errors.firstName}
                                    <small class="text-destructive">{$errors.firstName}</small>
                                {/if}
                            </div>

                            <div>
                                <Input type="text" name="lastName" id="lastName" placeholder="Last name" required
                                bind:value={$form.lastName} {...$constraints.lastName}/>
                                {#if $errors.lastName}
                                    <small class="text-destructive">{$errors.lastName}</small>
                                {/if}
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-2">
                            <div>
                                <Input type="email" name="email" id="email" placeholder="email@example.com" required
                                bind:value={$form.email} {...$constraints.email}/>
                                {#if $errors.email}
                                    <small class="text-destructive">{$errors.email}</small>
                                {/if}
                            </div>
                            <div>
                                <Input type="email" name="emailConfirm" id="emailConfirm" placeholder="Email confirmation" required
                                bind:value={$form.emailConfirm} {...$constraints.emailConfirm}/>
                                {#if $errors.emailConfirm}
                                    <small class="text-destructive">{$errors.emailConfirm}</small>
                                {/if}
                            </div>
                        </div>
                    </div>
                    <div class="py-2">
                        <p class="text-accent-foreground p-1 font-robomo">Password and confirmation</p>
                        <div class="grid md:grid-cols-2 gap-2 py-2">
                            <div>
                                <Input type="password" name="password" id="password" placeholder="Pa$$w0rd" required
                                bind:value={$form.password} {...$constraints.password}/>
                                {#if $errors.password}
                                    <small class="text-destructive">{$errors.password}</small>
                                {/if}
                            </div>
                            <div>
                                <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Pa$$w0rd confirmation" required
                                bind:value={$form.passwordConfirm} {...$constraints.passwordConfirm}/>
                                {#if $errors.passwordConfirm}
                                    <small class="text-destructive w-full">{$errors.passwordConfirm}</small>
                                {/if}
                            </div>
                        </div>
                    </div>
                    <div class="py-2">
                        <p class="text-accent-foreground p-1 font-robomo">Birthdate and language skills</p>
                        <div class="grid md:grid-cols-2 gap-2 py-2">
                            <div>
                                <Input type="date" name="birthDate" id="birthDate" class="text-muted-foreground" required
                                bind:value={$form.birthDate} {...$constraints.birthDate}/>
                                {#if $errors.birthDate}
                                    <small class="text-destructive">{$errors.birthDate}</small>
                                {/if}
                            </div>
                            <div>
                                <Select.Root multiple
                                    selected={selectedLanguages}
                                    onSelectedChange={(selected) => {
                                        if (selected) {
                                            $form.languages = selected.map(item => item.value);
                                        } else {
                                            $form.languages = [];
                                    }
                                    }}>
                                    <Select.Trigger>
                                        <Select.Value placeholder="Select 1 or more languages" />
                                    </Select.Trigger>
                                    <Select.Content>
                                        {#each languagesEnum as lang}
                                            <Select.Item value={lang}>
                                                {lang}
                                            </Select.Item>
                                        {/each}
                                    </Select.Content>
                                        {#each $form.languages as lang}
                                            <input name="languages" hidden value={lang} />
                                        {/each}
                                        {#if $errors.languages }
                                            <small class="text-destructive">Select 1 or more languages</small>
                                        {/if}
                                </Select.Root>
                            </div>
                        </div>
                    </div>

                    <div class="my-1 pt-3 grid gap-5">
                        <div class="flex gap-4">
                            <Button type="submit" class="w-[50%]">
                                Register for an account
                            </Button>
                            <a class="w-[50%]" href="/auth/login">
                            <Button class="w-full" variant="outline">Login instead</Button>
                            </a>
                        </div>
                    </div>
                </form>

                <!-- <AlternativeAuth /> -->

            </div>
        </CardContent>
        <CardFooter class="flex justify-center">
            <TermsAndPrivacy />
        </CardFooter>
        </Card>
    </div>
</div>
