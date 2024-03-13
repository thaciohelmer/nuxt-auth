import { KeycloakClienteToken } from '~/server/interfaces'

export default defineEventHandler(async (event) => {
	const { KC_BASE_URL, KC_REALM, KC_CLIENT_ID, KC_CLIENT_SECRET } =
		useRuntimeConfig(event)

	const { email, password, firstName, lastName, username } = await readBody<{
		email: string
		password: string
		firstName: string
		lastName: string
		username: string
	}>(event)

	try {
		const tokenClienteResposta = await fetch(
			`${KC_BASE_URL}/realms/${KC_REALM}/protocol/openid-connect/token`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					grant_type: 'client_credentials',
					client_id: KC_CLIENT_ID,
					client_secret: KC_CLIENT_SECRET,
				}),
			}
		)

		const tokenCliente: KeycloakClienteToken = await tokenClienteResposta.json()

		if (!tokenCliente) throw new Error('Erro ao obter token do cliente')

		const clienteCriadoResposta = await fetch(
			`${KC_BASE_URL}/admin/realms/${KC_REALM}/users`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${tokenCliente.access_token}`,
				},
				body: JSON.stringify({
					username,
					firstName,
					lastName,
					email,
					enabled: true, // TODO: remover quando implementar confirmação de email
				}),
			}
		)

		if (clienteCriadoResposta.status !== 201) {
			throw new Error('Erro ao criar usuário')
		}

		const headerLocation = clienteCriadoResposta.headers.get('Location')

		const senhaAtulizadaResposta = await fetch(
			`${headerLocation}/reset-password`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${tokenCliente.access_token}`,
				},
				body: JSON.stringify({
					type: 'password',
					value: password,
					temporary: false,
				}),
			}
		)

		if (senhaAtulizadaResposta.status !== 204) {
			throw new Error('Erro ao definir senha do usuário')
		}

		setResponseStatus(event, 201)

		return {
			mensagem: 'Usuário criado com sucesso',
		}
	} catch (erro) {
		return createError({
			status: 500,
			message: (erro as Error).message,
		})
	}

	return
})
