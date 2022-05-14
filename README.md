# Node JS skeleton project

### To generate model and create migration file as well
```sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string```


### to generate migration
sequelize-cli migration:generate --name create-user  

### to run migration
sequelize db:migrate 