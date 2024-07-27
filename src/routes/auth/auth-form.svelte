<script lang="ts">
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

  let alertTitle = '';
  let alertMessage = '';
  let showLoginRegisterButtons = false;

  // Handle form submission
  async function handleSubmit(event: Event) {
    event.preventDefault();

    // send form to frontend server +page.server.ts
    const response = await fetch('/auth', {
      method: 'POST',
      body: new FormData(event.target as HTMLFormElement),
    });

    // handle response & show toast
    const result = await response.json();
    console.log("result in auth-form.svelte: ");
    console.log(result);
    if (JSON.parse(result.data)[1]) {
      alertTitle = 'Sign up successful!';
      alertMessage = "You've successfully signed up to our newsletter! Thank you 🥰";
      showLoginRegisterButtons = true;
      console.log("showLoginRegisterButtons: ", showLoginRegisterButtons);
      toast.success(alertTitle, {
        description: alertMessage
      });
    } else {
      alertTitle = 'Sign up failed!';
      alertMessage = "An error occurred while signing up to our newsletter. Please try again later 😥";
      toast.error(alertTitle, {
        description: alertMessage
      });
    }
  }
</script>

<form method="POST" on:submit|preventDefault={handleSubmit} use:enhance>

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

</form>