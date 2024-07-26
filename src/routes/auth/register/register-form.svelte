<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { registerSchema, type RegisterSchema } from "./register-schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  export let data: SuperValidated<Infer<RegisterSchema>>;

  const form = superForm(data, {
    validators: zodClient(registerSchema),
  });

  const { form: formData, enhance } = form;
</script>
   
<form method="POST" use:enhance>
  <p class="mb-3 text-left font-semibold">General information</p>

  <div class="grid md:grid-cols-2 gap-2">
    <Form.Field {form} name="firstName">
      <Form.Control let:attrs>
        <!-- <Form.Label>First name</Form.Label> -->
        <Input
          {...attrs}
          bind:value={$formData.firstName}
          type="text"
          placeholder="First name"
          required
        />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="lastName">
      <Form.Control let:attrs>
        <!-- <Form.Label>Last name</Form.Label> -->
        <Input
          {...attrs}
          bind:value={$formData.lastName}
          type="text"
          placeholder="Last name"
          required
        />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>

  <div class="grid md:grid-cols-2 gap-2 mb-4">
      <Form.Field {form} name="email">
          <Form.Control let:attrs>
              <!-- <Form.Label>Email</Form.Label> -->
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

      <Form.Field {form} name="username">
          <Form.Control let:attrs>
              <!-- <Form.Label>Username</Form.Label> -->
              <Input
                  {...attrs}
                  bind:value={$formData.username}
                  type="text"
                  placeholder="Username"
                  required
              />
          </Form.Control>
          <Form.FieldErrors />
      </Form.Field>
  </div>


  <p class="my-3 text-left font-semibold">Password and confimation</p>
  <div class="grid md:grid-cols-2 gap-2 mb-4">
      <Form.Field {form} name="password">
          <Form.Control let:attrs>
              <!-- <Form.Label>Password</Form.Label> -->
              <Input
                  {...attrs}
                  bind:value={$formData.password}
                  type="password"
                  placeholder="Password"
                  required
              />
          </Form.Control>
          <Form.FieldErrors />
      </Form.Field>

      <Form.Field {form} name="passwordConfirm">
          <Form.Control let:attrs>
              <!-- <Form.Label>Confirm password</Form.Label> -->
              <Input
                  {...attrs}
                  bind:value={$formData.passwordConfirm}
                  type="password"
                  placeholder="Confirm password"
                  required
              />
          </Form.Control>
          <Form.FieldErrors />
      </Form.Field>
  </div>
  <p class="my-3 text-left font-semibold">Birthdate and language skills</p>
  <div class="grid md:grid-cols-2 gap-2 mb-4">
      <Form.Field {form} name="birthDate">
          <Form.Control let:attrs>
              <!-- <Form.Label>Birth date</Form.Label> -->
              <Input
                  {...attrs}
                  bind:value={$formData.birthDate}
                  type="date"
                  placeholder="Birth date"
                  required
                  class="text-muted-foreground"
              />
          </Form.Control>
          <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="languages">
          <Form.Control let:attrs>
              <!-- <Form.Label>Languages</Form.Label> -->
              <Input
                  {...attrs}
                  bind:value={$formData.languages}
                  type="text"
                  placeholder="Languages"
                  required
              />
          </Form.Control>
          <Form.FieldErrors />
      </Form.Field>
  </div>
  <Form.Button class="w-full my-1">
    Register with email
  </Form.Button>
</form>