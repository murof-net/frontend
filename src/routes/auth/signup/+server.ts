import { UserSignupSchema, type UserSignupInput } from '../user.auth.schema.js';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { ZodError } from 'zod';

export async function POST({ request }) {
	try {
        // handling POST request from signup form
		const body = (await request.json()) as UserSignupInput;
        // data validation
		const data = UserSignupSchema.parse(body);
        // hashing password before saving to database
		const hashedPassword = await bcrypt.hash(data.password, 12);

		// const user = await prisma.user.create({
		// 	data: {
		// 		name: data.name,
		// 		email: data.email,
		// 		password: hashedPassword,
		// 		photo: data.photo
		// 	}
		// });

		return json({ status: 'success', data: { ...user, password: undefined } }, { status: 201 });

	} catch (error: any) {
        // Vallidation error handling
		if (error instanceof ZodError) {
			return json({ message: 'failed validations', error: error.flatten() }, { status: 400 });
		}

		if (error.code === 'P2002') {
			return json({ message: 'user with that email already exists' }, { status: 409 });
		}

		return json({ message: error.message }, { status: 500 });
	}
}