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
   
    export let data: SuperValidated<Infer<AuthSchema>>;
   
    const form = superForm(data, {
      validators: zodClient(authSchema),
    });
   
    const { form: formData, enhance } = form;
  </script>
   
  <form method="POST" use:enhance>
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