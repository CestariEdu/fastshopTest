# Test FastShop

O propósito desse teste é acessar o e-commerce, realizar uma busca, selecionar um produto e validar as informações no carrinho.

A loja escolhida não possui captcha, em alguns momentos ocorre problema na execução devido ao modal de permissão de cookies abrir novamente após permitir o uso, não foi possível fazer um workaround para isso.

## Ferramentas
[Webdriver IO](https://webdriver.io/) - Biblioteca de testes automatizado

[Pure-gen](https://armindojr.github.io/pure-gen/) - Geração de dados do formulário

[DotEnv](https://github.com/motdotla/dotenv) - Gerenciamento de variáveis de ambiente

[Timeline-Reporter](https://github.com/QualityOps/wdio-timeline-reporter) - Relatório de testes em HTML.

## Instalação

É necessário ter o NodeJS instalado.

```bash
npm install
```

## Execução

```node
npm run test
```

## Relatório
```node 
npm run open:report
```

## License
[MIT](https://choosealicense.com/licenses/mit/)