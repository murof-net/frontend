<script lang="ts">
    import type { PageData } from "./$types"
    
    // Form validation
    import { zod } from 'sveltekit-superforms/adapters';
    import { registerSchema } from "../auth-schemas";
    import { superForm } from "sveltekit-superforms/client"
    // import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    
    // UI components
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "$lib/components/ui/card"
    import { Input } from "$lib/components/ui/input";
    import PasswordInput from "$lib/components/ui/input/PasswordInput.svelte";
    import { Button } from "$lib/components/ui/button";
    // import * as Command from "$lib/components/ui/command/index.js";
    // import * as Popover from "$lib/components/ui/popover/index.js";
    // import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    // import Check from "lucide-svelte/icons/check";
    // import { cn } from "$lib/utils.js";
    // import { tick } from "svelte";
    // import AlternativeAuth from "$lib/components/sections/AlternativeAuth.svelte";
    import TermsAndPrivacy from "$lib/components/sections/TermsAndPrivacy.svelte";

    export let data: PageData;
    const { form, errors, enhance, constraints, message } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave this page? Changes may not be saved",
        validators: zod(registerSchema),
        });

    // let open = false;
    // let langValue = "";
    
    // $: selectedLanguage = languagesSelect.find(item => item.value === langValue)?.label ?? "Select a language";
    // function closeAndFocusTrigger(triggerId: string) {
    //     // We want to refocus the trigger button when the user selects
    //     // an item from the list so users can continue navigating the
    //     // rest of the form with the keyboard.
    //     open = false;
    //     tick().then(() => {
    //     document.getElementById(triggerId)?.focus();
    //     });
    // }
</script>

<div class="w-full">
    <div class="pb-6 md:py-12 flex justify-center items-center">
        <Card class="p-0 m-3 md:p-4 md:m-4">
        <CardHeader>
            <CardTitle class="font-robomo text-3xl font-bold p-2 text-center">
                Register
            </CardTitle>
            <CardDescription class="text-balance text-muted-foreground p-1 text-center">
                {#if $message}
                    <span class="text-destructive">{$message}</span>
                {:else}
                    Enter your details to create an account
                {/if}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <!-- <div class="container">
                <SuperDebug data={$form}/>
            </div> -->
            
            <form method="POST" use:enhance>
                <div class="pb-2">
                    <p class="text-accent-foreground p-1 font-robomo">General information</p>
                    <div class="grid md:grid-cols-2 gap-2 py-2">
                        <div>
                            <Input type="text" name="firstName" id="firstName" placeholder="First name" required
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
                            <PasswordInput name="password" id="password" placeholder="Password" required
                            bind:value={$form.password} {...$constraints.password} />
                            {#if $errors.password}
                            <div class="max-w-full md:max-w-[14rem] leading-tight">
                                <small class="text-destructive">
                                    {$errors.password}
                                </small>
                            </div>
                            {/if}
                        </div>
                        <div>
                            <PasswordInput name="passwordConfirm" id="passwordConfirm" placeholder="Password confirmation" required
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
                            <!-- TODO: use enum with multi-select combobox instead of free text string -->
                            <Input type="text" name="languages" id="languages" placeholder="English, Dutch, ..." required bind:value={$form.languages} {...$constraints.languages}/>
                            {#if $errors.languages}
                                <small class="text-destructive">{$errors.languages}</small>
                            {/if}
                            <!-- <Popover.Root bind:open let:ids>
                                <Popover.Trigger asChild let:builder>
                                  <Button
                                    builders={[builder]}
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    class="w-full justify-between text-muted-foreground"
                                  >
                                    {selectedLanguage}
                                    <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </Popover.Trigger>
                                <Popover.Content>
                                  <Command.Root>
                                    <Command.Input placeholder="Search languages..." />
                                    <Command.Empty>Language not found.</Command.Empty>
                                    <Command.Group>
                                      {#each languagesSelect as lang}
                                        <Command.Item
                                          value={lang.value}
                                          onSelect={(currentValue) => {
                                            langValue = currentValue;
                                            closeAndFocusTrigger(ids.trigger);
                                          }}
                                        >
                                          <Check
                                            class={cn(
                                              "mr-2 h-4 w-4",
                                              langValue !== lang.value && "text-transparent"
                                            )}
                                          />
                                          {lang.label}
                                        </Command.Item>
                                      {/each}
                                    </Command.Group>
                                  </Command.Root>
                                </Popover.Content>
                                </Popover.Root> -->
                                
                            <!-- <Select.Root multiple
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
                            </Select.Root> -->
                        </div>
                    </div>
                </div>

                <div class="my-1 pt-3 grid gap-5">
                    <div class="flex gap-4">
                        <Button type="submit" class="w-[50%]">
                            Register
                        </Button>
                        <a class="w-[50%]" href="/auth/login">
                        <Button class="w-full" variant="outline">Go to login</Button>
                        </a>
                    </div>
                </div>
            </form>

            <!-- <AlternativeAuth /> -->

        </CardContent>
        <CardFooter class="flex justify-center">
            <TermsAndPrivacy />
        </CardFooter>
        </Card>
    </div>
</div>
