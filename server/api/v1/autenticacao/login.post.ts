import { KeycloakUsuarioToken } from '~/server/interfaces/'

export default defineEventHandler(async (event) => {
	const { KC_BASE_URL, KC_REALM, KC_CLIENT_ID, KC_CLIENT_SECRET } =
		useRuntimeConfig(event)

	const { email, senha } = await readBody<{
		email: string
		senha: string
	}>(event)

	try {
		const tokenUsuarioResposta = await fetch(
			`${KC_BASE_URL}/realms/${KC_REALM}/protocol/openid-connect/token`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: `Basic ${Buffer.from(
						`${KC_CLIENT_ID}:${KC_CLIENT_SECRET}`
					).toString('base64')}`,
				},
				body: new URLSearchParams({
					grant_type: 'password',
					client_id: KC_CLIENT_ID,
					username: email,
					password: senha,
				}),
			}
		)

		if (tokenUsuarioResposta.status === 401) {
			throw new Error('Email ou senha inválidos')
		}

		if (tokenUsuarioResposta.status !== 200) {
			throw new Error('Erro ao obter token do usuário')
		}

		const tokenUsuario: KeycloakUsuarioToken = await tokenUsuarioResposta.json()

		if (!tokenUsuario) throw new Error('Erro ao obter token do usuário')

		setCookie(event, 'token', tokenUsuario.access_token, {
			maxAge: tokenUsuario.expires_in,
		})

		setResponseStatus(event, 204)

		return
	} catch (error) {
		return createError({
			status: 401,
			message: (error as Error).message,
		})
	}
})
