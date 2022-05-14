# Node JS skeleton project

```
> sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
> sequelize db:migrate
> sequelize db:seed:all
> sequelize-cli migration:generate --name create-user
> sequelize db:migrate:undo
> sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
> sequelize seed:generate --name demo-user
```
