# Kanban Board - Angular12

# ✅ Resultado final:
![GIF KANBAN _ ANGULAR !@](https://user-images.githubusercontent.com/62574338/144427575-5e455241-809e-4dfc-a205-553d73d6b380.gif)

# 🏷️ Contexto

Esse projeto foi proposto como conclusão do módulo de Angular do curso "Santander Corders - web fullstack developer degree" ministrado pela Lets Code e pela professora larissa Queiroz, minha mestra do FrontEnd.<img src="https://user-images.githubusercontent.com/62574338/144433078-f4d94089-6800-48b7-861b-482472adfc95.png" Style="width=10px;">   

Foi finalizado em 30 de novembro de 2021


O propósito desse desafio é a criação de frontend para um quadro de kanban. Esse quadro possui listas, que contém cards.
O backend foi feito usando Node e já foi disponibilizado.


# Aplicando o CRUD
O usuário pode:

   ✏️ Criar novos cards
   📖 Ler os cards
   ⏫ Atualizar o título, conteúdo e a coluna pertecente dos cards
   ❌ Deletar os cards


# 🛠 Linguagens e frameworks
    Angular 12
    Bootstrap 5
    Typescript
    API using JWT



# Breathing passado:

O propósito desse desafio é a criação de frontend para um quadro de kanban. Esse quadro possui listas, que contém cards.
As imagens abaixo são apenas uma ilustração da funcionalidade desejada:

![68747470733a2f2f73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f6c6370692f36326239303530392d383739322d346662312d396161372d3234306635613232633838652e706e67](https://user-images.githubusercontent.com/55414688/141601300-8d164143-2108-4a6a-9457-3c3412a2d902.png)

Com os dois primeiros cards em modo de edição:

![68747470733a2f2f73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f6c6370692f36343837353936382d623033632d343962372d396332382d3464383262373365376435312e706e67](https://user-images.githubusercontent.com/55414688/141601343-8f7c2d25-6abe-4e22-b4b7-1e44e9f9fcb5.png)

Esse é um protótipo simples, sem estilo, o uso de uma biblioteca de CSS é **obrigatório**.

### Rodando a API

Uma API de exemplo foi disponibilizada na pasta BACK

Para rodá-la, faça:
```
> cd BACK
> npm install
> npm run server
```

Ela responderá na porta 5000.

### Desafio

Você precisa criar um frontend de acordo com os requisitos abaixo, que deve ser desenvolvido na pasta "FRONT".

#### Requisitos

A API nesse projeto utiliza JWT para autenticação, você deve fazer a seguinte requisição antes qualquer outra:

```
(POST) http://0.0.0.0:5000/login/

{ "login":"letscode", "senha":"lets@123" }
```

Feita a requisição você receberá um token em formato json. Esse token deve ser enviado em todas as requisições subsequentes pelo header Authorization de acordo com o padrão JWT.

`Authorization: 'Bearer <token>'`

Lembre-se de setar os headers Accept e ContentType para json em todas as requisições...

A API tem os seguintes entrypoints:

```
(GET)     http://0.0.0.0:5000/cards/
(POST)    http://0.0.0.0:5000/cards/
(PUT)     http://0.0.0.0:5000/cards/{id}
(DELETE)  http://0.0.0.0:5000/cards/{id}
```

**GET** obtém uma lista de cards.

A API retorna um array com o seguinte formato:

```
[
  {
    id: uuid,
    titulo: string,
    conteudo: string,
    lista: string
  },
  ...
]
```

**POST** adiciona um novo card, passe-o pelo corpo da requisição com o seguinte formato:

```
{
  titulo: string,
  conteudo: string,
  lista: string
}
```

A api retornará o card completo como o id atribuído.

**PUT** altera um card existente, passe o id na URL e o card completo pelo corpo da requisição de acordo com o formato:
```
{
  id: uuid (o mesmo passado na URL),
  titulo: string,
  conteudo: string,
  lista: string
}
```

A api retornará o card completo que foi salvo.

**DELETE** remove um card existente, passe o id na URL.

A API retornará a lista dos cards que sobraram (igual ao GET).
```
[
  {
    id: uuid,
    titulo: string,
    conteudo: string,
    lista: string
  }
]
```

**Atenção**: As rotas tem validações e retornos diferentes dependendo do resultado:

POST e PUT retornam 400 se titulo, conteudo ou lista forem avaliados como falsy.

PUT também retorna 400 se o id passado na URL não for igual ao do objeto passado no corpo da requisição.

PUT e DELETE retornam 404 se não encontrarem um card com o id passado na URL.

Todas as rotas retornam 401 se o token não for passado, for inválido, mal-formado ou expirado.

#### Requisitos

1. A API deve ser usada para persistência dos cards (ela trabalha com persistência em memória) e não deve ser alterada.

2. A interface gráfica serão 2 telas:

-  tela do quadro de kanban: deve haver três colunas chamadas "To do", "Doing" e "Done".
-  tela de login: formulário para inserção de login e senha.

A tela de login deve ser acessada na rota `/login` e a tela do quadro de kanban deve ser acessada na rota `/kanban-board`. 

**Obs: A tela do quadro de Kanban só deve ser acessada caso o exista um token no localStorage. Caso não exista, o usuário deve ser redirecionado para uma página de erro.**

3. Os cards devem ser listados nessas colunas de acordo com o valor do campo `lista` presenta no card. Os valores de `lista` devem ser "ToDo", "Doing" e "Done", respectivamente.

4. Deve haver um local que permita criar um card passando valores para o `titulo` e `conteudo`, deve haver um botão para adicionar o card.

5. Um novo card deve sempre cair na lista "To Do" após persistido na API.

6. O card deverá ter dois modos: Visualização e Edição.

7. No modo de visualização o card terá um cabeçalho com seu título, o conteúdo e 4 botões.

8. Um dos botões do card deverá excluí-lo (persistindo pela API), outro colocá-lo em modo de edição.

9. Os dois outros botões devem mudar o card para a lista anterior (se houver) ou para a lista seguinte (se houver). A decisão de desabilitar, esconder ou apenas não gerar o evento desses botões quando não houver a proxima lista ou a anterior é sua.

10. No modo de edição, o card conterá um input para o `titulo`, um textarea para o `conteudo` e dois botões.

11. No modo de edição, um dos botões cancela a edição, quando pressionado os campos devem ser resetados para o valor atual e voltar o card ao modo de visualização.

12. O outro botão salva o card, persistindo as informações pela API. Também volta ao modo de visualização em seguida.

13. Toda decisão de visual é sua. Apenas utilize as duas telas especificadas no requisito 2.

14. O projeto deve ser colocado em um repositório GITHUB ou equivalente, estar público, e conter um readme.md que explique em detalhes qualquer comando ou configuração necessária para fazer o projeto rodar.

15. A entrega será apenas a URL do repositório.

#### Conceitos a serem avaliados no projeto:

- Componentes
- Databinding
- Diretivas
- Formulários
- Rotas
- Pipes
- Services e injeção de dependência
- Observables
- Requisições HTTP
- Autenticação e proteção de rotas
- NgModules


