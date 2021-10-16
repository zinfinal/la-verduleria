
npx sequelize-cli db:create
npx sequelize-cli model:generate --name Categoria --attributes nombre:string,slug:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-categoria
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo 20211016151911-demo-categoria