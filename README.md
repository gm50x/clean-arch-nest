# ARQUITETURA LIMPA COM NESTJS

## Descrição

Implementação de exemplo criada utilizando conceitos de Arquitetura Limpa e o framework NestJS.

## VIOLAÇÕES:

- Estamos utilizando um componente do Framework, @Injectable(), nos nossos Casos de Uso, para permitir que eles recebam as abstrações entregues pelo sistema de injeção de dependências do Nest. Utilizamos o componente, apesar de violar o modelo, para que não tenhamos que inventar um mecanismo de injeção de dependências, ou fazer as amarrações manualmente.

## Camadas:

O modelo possui 3 camadas: Adapter, Domain e UseCase.

### Adapter:

Esta camada é responsável por conter tudo que não está diretamente relacionado com nosso business. Aqui fica contido o MVC com suas controllers e services, a comunicação com serviços externos e bancos de dados. Esta camada é responsável por adaptar o mundo exterior (Request, PubSub, Database...) para as necessidades de nossos casos de uso (UseCase).

#### Detalhamento

- Controllers
- - Adaptação de IO
- - Recebe abstração do use-case por injeção de dependência
- - executa use-case com input adaptado
- Services
- - Abstrai uma camada externa (banco de dados, pubsub, serviço terceiro)
- - Implementa abstrações de domínio: ex: PubSubService implements @domain/abstractions/MessageSender
- Models
- - Input:
- - - Mapeamento dos valores da entrada esperada
- - - Validação de aplicação (campo núlo, obrigatório, enumeradores)
- - - Adaptação(de-para) para domain-model
- - Output
- - - Mapeamento das saídas esperadas
- - - Adaptação(de-para) de domain-model para application-model (saída da aplicação, por exemplo uma saíad paginada possui um payload ligeiramente diferente com data[], total)
- Demais componentes dos frameworks utilizados:
- - No caso do nest: Modules
- Utilização de muitos decorators
- Não há limitações do que pode ser utilizado por aqui. Terra de ninguém.

### Domain

O domínio de nossa aplicação é onde temos as nossas abstrações, que serão utilizadas pelos casos de uso e o nosso modelo de negócios. Contudo, podemos adicionar qualquer fragmento de regra de negócios aqui, seja uma função ou uma classe complexa. Não utilizamos nenhum artefato dos Frameworks nessa camada.

#### Detalhamento

- Contém as abstrações utilizadas pelos UseCases e implementadas pelo Adapter.
- Contém as models do Domain
- Contem abstrações de UseCase (talvez um pouco artístico)
- Contém inputs de Domain
- Contém outputs de Domain
- Contém as Domain Entities:
- - Qualquer artefato que carrega consigo alguma porção de regra de negócio é uma entidade de domínio, pode ser uma função, uma constante, uma classe.

### UseCases:

Os casos de uso são orchestradores de regras de negócio. Eles criam modelos de negório, validam regras de negócio e aplicam as execuções se tudo estiver de acorto. Um exemplo vai facilitar:
Para efetuar um pix temos que fazer as seguintes validações de negócio:

Verificar a conta origem > verificar a conta destino > verificar se há saldo na conta origem > efetuar o pix

Em que cada bloquinho desse pode ser representado na forma de uma entidade, apesar dessa fragmentação tornar o código muito artístico.

#### Detalhamento
- Orchestra fragmentos de regra de negócio
- Utiliza abstrações do domain
- [DE NOVO] Violação do Clean Arch: No nest, para fazer uso do sistema de injeção de dependências é preciso declarar @Injectable() nesta camada. Para não violar este princípio é preciso tornar a criação da classe muito mais verbosa, então optamos por violar em favor da simplicidade.



## Instalação de dependências

```bash
# Dev / Build
$ npm install

# Production
$ npm ci --omit=dev
```

## Subindo a aplicação

```bash
# development
$ npm run start

# watch:development
$ npm run start:dev

# production
$ npm run start:prod
```

## Testando a aplicação

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
