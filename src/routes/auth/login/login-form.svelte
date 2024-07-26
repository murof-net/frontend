<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { loginSchema, type LoginSchema } from "./login-schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  export let data: SuperValidated<Infer<LoginSchema>>;

  const form = superForm(data, {
    validators: zodClient(loginSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
  <div class="grid md:grid-cols-2 gap-2">
    <Form.Field {form} name="email">
      <Form.Control let:attrs>
        <Form.Label>Email</Form.Label>
        <Input
          {...attrs}
          bind:value={$formData.email}
          type="email"
          placeholder="email@example.com"
          required
        />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="password">
      <Form.Control let:attrs>
        <Form.Label>Password</Form.Label>
        <Input
          {...attrs}
          bind:value={$formData.password}
          type="password"
          placeholder="secret"
          required
        />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Button class="w-full my-1">
    Login with email
  </Form.Button>
</form>