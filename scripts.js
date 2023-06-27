

// REALIZAR ATUALIZAÇÕES //

//Update de um dado de um funcionário
db.funcionarios.updateOne({nome: "Robson Rodrigues"}, {$set:{Telefone: "51985865245"}})

//Update em todos os funcioonários
db.funcionarios.updateMany({}, {$set:{Observacao: "fixos"}})

// REALIZAR EXCLUSÕES //
db.funcionarios.deleteOne({nome: "Robson Rodrigues"})



// CONSULTAS //

// Consulta todos os itens da coleção pedidos
db.pedidos.find().pretty()

// Contar quantidade de pedidos
db.pedidos.find().count()

// Contar quantidade de funcionarios apartir de valores de salários
db.funcionarios.countDocuments({salario: {$gte: "1000.00", $lt: "2000.00"}})

// Listar cliente por id
db.clientes.findOne({_id: ObjectId("649a50e47bd851dbf34e4dcb")})

// Listar pedidos de pizzas com valores acima de 40.00 reais.
db.pizzas.find({valor: {$gte: "40.00"}}, {_id: 0, nome: 1, valor: 1}).pretty()



// AGGREGATE //

//Agrupar e listar funcionário com salários iguais ou menorees que 1500.00
db.funcionarios.aggregate([{"$match":{"salario": {$lt: "1500.00"}}},{"$group":{"_id": "$nome"}}])

//Listar valores abaixo de 70.00, listar por nome (sem o _id) e ordenar por nome.
db.pizzas.aggregate([

	{ $match: { valor: {$lt: "70.00"}} },
	{ $project: {
	nome: "$nome",
	_id: 0 
 }},
 {$sort: { "nome": 1}},
]).pretty()

//Junção entre collections

db.clientes.aggregate([
    {
        $match: {
          nome: "Luan Silveira"
        }
      },
    {
      $lookup: {
        from: "pedidos",
        localField: "pedidos._id",
        foreignField: "_id",
        as: "pedidos"
      }
    },
    {$unwind: "$pedidos"},
    {
      $project: {
        _id: 1, "pedidos._id": 1
      }
    },
    {$group: {_id: "$nome"}}
  ])
  
  // Indexes
  // Listar de forma mais eficiente por destino (mesa ou entrega) listando clientes e funcionários.
  db.pedidos.createIndex({ cliente_id: 1, destino: 1, funcionario_id: 1 })

  db.pedidos.createIndex({ entregador_id: 1, destino: 1})
