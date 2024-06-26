import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import bcrypt from 'bcryptjs'; // You'll need to install bcrypt: npm install bcrypt

// (Hypothetically, this is where you'd interact with your database)
const users = [
    { email: 'user1@example.com', passwordHash: bcrypt.hashSync('password123', 10) },
	{ email: 'user2@example.com', passwordHash: bcrypt.hashSync('password456', 10) },
	{ email: 'user3@example.com', passwordHash: bcrypt.hashSync('password789', 10) },
    // ... more users
];

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if (!email || !password) {
            return fail(400, { missing: true });
        }

        const user = users.find(u => u.email === email);
        if (!user) {
            return fail(401, { credentials: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password as string, user.passwordHash);
        if (!passwordMatch) {
            return fail(401, { credentials: 'Invalid email or password' });
        }

        // Successful login:
		console.log('Successful login for:', email);
        // 1. Generate JWT (you'll need a JWT library for this)
        // 2. Set JWT in a cookie (use HTTPOnly cookie for security)
        // 3. Redirect to a protected page

        console.log('Successful login for:', email);
        throw redirect(303, '/app'); // Replace '/app' with your protected route
    }
};
