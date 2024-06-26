import { UserSigninSchema, type UserSigninInput } from '../user.auth.schema.js';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { ZodError } from 'zod';
import { signJWT } from '../jwt.token.js';
import { JWT_EXPIRES_IN } from '$env/static/private';

export async function POST({ request, cookies }) {
	try {
        // handling POST request from signup form
		const body = (await request.json()) as UserSigninInput;
        // data validation
		const data = UserSigninSchema.parse(body);
        // find user in database by email and compare passwords
		// const user = await prisma.user.findUnique({
		// 	where: { email: data.email }
		// });

		if (!user || !(await bcrypt.compare(data.password, user.password))) {
			return json({ message: 'Invalid email or password' }, { status: 401 });
		}

		const token = await signJWT({ sub: user.id }, { exp: `${JWT_EXPIRES_IN}m` });

		const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;

		const cookieOptions = {
			httpOnly: true,
			path: '/',
			secure: process.env.NODE_ENV !== 'development',
			maxAge: tokenMaxAge
		};

		cookies.set('token', token, cookieOptions);
		cookies.set('logged-in', 'true', {
			...cookieOptions,
			httpOnly: false
		});

		return json({ token });
	} catch (error: any) {
		if (error instanceof ZodError) {
			return json({ message: 'failed validations', error: error.flatten() }, { status: 400 });
		}

		return json({ message: error.message }, { status: 500 });
	}
	}