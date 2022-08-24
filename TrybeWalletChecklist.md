### 1.Passo a passo inicial - Redux e checks
*Instalação*
- [x] npm install.

*Criar dentro do diretório src:*
- [x] diretório actions;
- [x] diretório reducers;
- [x] diretório store.

*Criar dentro do diretório actions:*
- [x] arquivo index.js.

*Criar dentro do diretório reducers:*
- [x] arquivo index.js.

*Criar dentro do diretório store:*
- [x] arquivo index.js.

*No arquivo src/store/index.js:*
- [x] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

*No arquivo src/store/store.js:*
- [x] importar o rootReducer e criar a store
- [x] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

*Na pasta reducers:*
- [x] criar no index.js o rootReducer;
- [x] combar os outros reducers na função rootReducer;
- [x] configurar os exports do arquivo index.js (rootReducer);

*Na pasta actions:*
*Depois*
- [] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [] criar os actions creators necessários

*Nos componentes:*
- [] criar a função mapStateToProps
- [] criar a função mapDispatchToProps
- [] fazer o connect

## Login
### Requisito 1 - Crie uma página inicial de login com os seguintes campos e características
- [x] A rota para esta página deve ser ‘/’.
      - Route no arquivo App;

- [x] Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

- [x] Crie um botão com o texto ‘Entrar’.

- Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:

  - [x] O email está no formato válido, como 'alguem@alguem.com'.

  - [x] A senha possui 6 ou mais caracteres.

- [x] Salve o email no estado da aplicação, com a chave **_email_**, assim que a pessoa usuária logar.

- [x] A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

## Wallet
### Requisito 2. Crie uma página para sua carteira com as seguintes características

- [x] A rota para esta página deve ser `/carteira`

- [x] O componente deve se chamar Wallet e estar localizado na pasta `src/pages` no arquivo `Wallet.js`

## Header
### Requisito 3. Crie um header para a página de carteira contendo as seguintes características

- [x] Um elemento que exiba o email da pessoa usuária que fez login.

- [x] Adicione o atributo `data-testid="email-field"`.

- [x] Um elemento com a despesa total gerada pela lista de gastos.

- [x] Adicione o atributo `data-testid="total-field"`.

- [x] Inicialmente esse elemento deve exibir o valor `0`

- [x] Um elemento que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'.

- [x] Adicione o atributo `data-testid="header-currency-field"`.

## Formulário de adição de Despesa

### Requisito 4. Implemente a lógica para armazenar no estado global as siglas das moedas que vêm da API

  * Os valores da chave `currencies` no estado global devem ser puxados através de uma requisição à API, que deve ser feita ao entrar na página `/carteira`, sendo representado pela sigla de cada moeda, exemplo: 'USD', 'CAD', 'EUR'...

    * O endpoint utilizado deve ser: https://economia.awesomeapi.com.br/json/all

    * Remova das informações trazidas pela API a opção 'USDT' (Moeda Tether).

    * A chave `currencies` do estado global deve ser um array.

- [x] O valor da chave `currencies` no estado global é um array que possui as siglas das moedas que vieram da API.

### Requisito 5. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:

-[x] Um campo para adicionar valor da despesa.

-[x] Adicione o atributo `data-testid="value-input"`.

-[x] Um campo para adicionar a descrição da despesa.

-[x] Adicione o atributo `data-testid="description-input"`.
    
-[x] Um campo para selecionar em qual moeda será registrada a despesa com `data-testid="currency-input"`. 

-[x] O campo deve ter a label `Moeda`.

-[x] As options devem ser preenchidas pelo valor da chave `currencies` do estado global, implementada no requisito anterior.

-[x] O campo deve ser um `<select>`.

-[x] Um campo para adicionar qual método de pagamento será utilizado.

-[x] Adicione o atributo `data-testid="method-input"`.

-[x] Este campo deve ser um `<select>`. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.

-[x] Um campo para selecionar uma categoria (tag) para a despesa.

-[x] Este campo deve ser um dropdown. a pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.

-[x] O campo deve ser um `<select>`.

**Sugestões de correção no Readme:**

  Requisito 5 - Um campo para selecionar em qual moeda será registrada a despesa (com `data-testid="currency-input"`). 
  *entre parênteses a parte adicionada.


