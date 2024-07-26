<!-- 
 A Svelte component that 
 1. renders the form for email input (w/ sveltekit-superforms for validation)
 2. handles form submission to the FastAPI backend and redirects to the next page
 -->

<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { authSchema, type AuthSchema } from "./auth-schema";
    import {
      type SuperValidated,
      type Infer,
      superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { goto } from '$app/navigation';

    export let data: SuperValidated<Infer<AuthSchema>>;

    const form = superForm(data, {
      validators: zodClient(authSchema),
    });

    const { form: formData, enhance } = form;

    // Function to handle form submission
    async function handleSubmit(event) {
      event.preventDefault();

      const response = await fetch('http://127.0.0.1:8000/auth-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ email: formData.email }),
      });

      const result = await response.json();
      if (result.user_exists) {
        goto('/auth/login', { replaceState: true, state: { email: formData.email } });
      } else {
        goto('/auth/register', { replaceState: true, state: { email: formData.email } });
      }
    }
</script>

<form method="POST" use:enhance on:submit={handleSubmit}>
  <Form.Field {form} name="email">
    <Form.Control let:attrs>
      <Form.Label>Email</Form.Label>
      <Input {...attrs} bind:value={$formData.email} type="email" placeholder="email@example.com" />
    </Form.Control>
    <!-- <Form.Description>This is your public display name.</Form.Description> -->
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button class="w-full">Continue with email</Form.Button>
</form>