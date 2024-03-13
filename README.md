# Teste de Integração Nuxt 3 com Autenticação via API do Keycloak

Este repositório contém um aplicativo de teste de integração construído com Nuxt 3, utilizando autenticação via API do Keycloak. O objetivo deste projeto é demonstrar como integrar um front-end Nuxt 3 com o sistema de autenticação do Keycloak.

## Configuração do Ambiente

### Docker Compose

Para simplificar o processo de configuração do ambiente, este projeto utiliza Docker Compose para orquestrar os contêineres necessários. Antes de executar o aplicativo, certifique-se de ter o Docker Compose instalado em seu sistema.

Este projeto inclui a configuração do Keycloak e um banco de dados PostgreSQL necessário para sua operação. Para iniciar esses serviços, execute o seguinte comando na raiz do projeto:

```bash
docker-compose up -d
```

Isso iniciará os contêineres do Keycloak e do PostgreSQL em segundo plano.

### Configuração do Keycloak

[![Configuração do Keycloak](/readme/tutorial-keycloak.png)](https://youtu.be/wAV1gcn1IWc)

### Configuração do Nuxt

[![Configuração do Nuxt](/readme/tutorial-nuxt.png)](https://youtu.be/ZrMLfAye2fU)

https://youtu.be/ZrMLfAye2fU

## Executando o Aplicativo

Após a configuração do ambiente e do cliente Keycloak, você pode iniciar o aplicativo Nuxt 3. Certifique-se de ter o Node.js e o gerenciador de pacotes npm ou yarn instalados em seu sistema. Em seguida, siga estas etapas:

1. Instale as dependências do projeto:

```bash
npm install # ou yarn install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev # ou yarn dev
```

Isso iniciará o servidor de desenvolvimento do Nuxt 3. Você pode acessar o aplicativo em seu navegador em `http://localhost:3000`.

## Como Usar

O aplicativo de teste de integração Nuxt 3 com autenticação via API do Keycloak fornece um ambiente de demonstração simples. Os usuários podem se inscrever, fazer login e visualizar conteúdo protegido.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter detalhes.

