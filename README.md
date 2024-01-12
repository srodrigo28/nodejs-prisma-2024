### Criando API NodeJS Prisma Typescript

#### 1 [x] Configurações iniciais.
* [x] dentro de uma pasta usar o comando.
        npm init -y
* [x] primeira bibliotecas.
        npm i typescript ts-node-dev -D
* [x] iniciando tsconfig para configurar o typescript
        npx tsc --init
* [x] dentro do tsconfig.json descomentar e mudar algumas configuração
    // "outDir": "./dist",
    // "rootDir": "./src",

#### 2 [x] Iniciando com o prisma
* [x] npm i express @types/express -D
* [x] npm i cors @types/cors

* [x] Instalando e configurando prisma 
    npm i prisma @prisma/client 
    npx prisma init --datasource-provider mysql

#### 3 [x] Criando Model

model Categoria { // id   String @id @default(uuid())
    id    Int     @id @default(autoincrement())
    
    nome  String? @unique
    descricao String  @unique

    @@map("categorias")
}

model Usuario { // id   String @id @default(uuid())
    id    Int     @id @default(autoincrement())
    
    nome  String? @unique
    email String  @unique
    senha String  @unique

    @@map("usuarios")
}

model Produto {
    id    Int     @id @default(autoincrement())

    nome        String? @unique
    qtd         Int
    code_prod   String @unique
    valor       Float   @unique

    criado_em DateTime @default(now())
    @@map("produtos")

}

#### 4 [x] No banco de dados
    use mydb_prisma_orm_2014;
    select * from usuarios

#### 5 [x] Criando banco e usando os Models 
* [x] npx prisma migrate dev --name init

#### 6 [] Criando o Controller method create

#### 7 [] Criando o Route

#### 8 [] Criando o server

#### Referências
https://www.youtube.com/watch?v=nuLTwqPNq-w
#### Opcionais
    npx prisma init --url mysql://root:@localhost:3306/mydb_prisma


npx prisma studio

npx prisma init

npx prisma init --datasource-provider sqlite

npx prisma init --datasource-provider mysql

npx prisma init --url mysql://user:password@localhost:3306/mydb

npx prisma init --datasource-provider mongodb

npx prisma init --datasource-provider sqlserver

npx prisma init --datasource-provider postgresql

npx prisma migrate dev --name init