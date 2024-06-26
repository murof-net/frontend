import { JWT_SECRET_KEY } from '$env/static/private';
import { SignJWT, jwtVerify } from 'jose';

export const signJWT = async (payload: { sub: string }, options: { exp: string }) => {
	try {
		const secret = new TextEncoder().encode(JWT_SECRET_KEY);
		const alg = 'HS256';
		return new SignJWT(payload)
			.setProtectedHeader({ alg })
			.setExpirationTime(options.exp)
			.setIssuedAt()
			.setSubject(payload.sub)
			.sign(secret);
	} catch (error) {
		throw error;
	}
};
