<script>
    import { Button } from "$lib/components/ui/button";
    import { Card } from "$lib/components/ui/card";
</script>
  
<div class="flex flex-col items-center justify-center h-screen bg-gray-100">
<Card>
    <h1 class="text-center">Welcome to Flowbite</h1>
    <p class="text-center">Please login or register to continue.</p>
    <div class="flex flex-col items-center space-y-4">
    <Button><a href="/auth/login">Login</a></Button>
    <Button><a href="/auth/register">Register</a></Button>
    </div>
</Card>
</div>