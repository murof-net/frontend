<script>
    import { enhance } from '$app/forms';
	// export let data;
    // export let form;
</script>

<div class="centered">
    <h1>Sign in</h1>
    <form method="POST" action="?/signin" use:enhance>
        <div>
            <label for="email">Email
                <input id="email" name="email" type="email" placeholder="first.last@example.com" required />
            </label>
        </div>
        <div>
            <label for="password">Password
                <input id="password" name="password" type="password" placeholder="Password" required />
            </label>
        </div>
        <div>
            <button type="submit">Sign in</button>
        </div>
    </form>
</div>