<!-- <script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/components/ui/button";
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
  <div class="grid gap-2 mb-4">
    <Form.Field {form} name="email">
      <Form.Control let:attrs>
        <Form.Label>Email</Form.Label>
        <Input {...attrs} bind:value={$formData.email} type="email" placeholder="email@example.com" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <div class="my-1 grid gap-5">
    <Form.Button class="w-full" variant="default">
      Sign up for the newsletter
    </Form.Button>
    <div class="flex gap-4">
      <a class="w-[50%]" href={`/auth/login?email=${$formData.email}`}>
        <Button class="w-full" variant="outline">Go to login</Button>
      </a>
      <a class="w-[50%]" href={`/auth/register?email=${$formData.email}`}>
        <Button class="w-full" variant="outline">Go to Register</Button>
      </a>
    </div>
  </div>
</form> -->