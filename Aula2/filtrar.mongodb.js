use('atividade1')

// db.contatos.find({nome: /^a/i})

// db.contatos.find({telefone: /^9/})

// db.contatos.find({email: /gmail.com/})

// db.contatos.find({cidade: /São Paulo/})

// db.contatos.find({dataCadastro: {$gt: new Date("2023-01-01")}})

// db.contatos.updateOne(
//     {nome: "Daniel Rocha"},
//     {$set: {email: "daniel.rocha@bosch.com"} {telefone: "41977665544"}}
// )


// db.contatos.updateOne(
//     {nome: "Daniel Rocha"},
//     {$set: {cidade: "Campo Largo"}}
// )

// db.contatos.updateMany(
//      {telefone: /41/},
//     { $set: {cidade: "curitiba"}}
// )


// db.contatos.deleteOne({ 
//    email: "ana.silva@gmail.com"
// })


db.contatos.deleteOne({ 
   cidade: "Curitiba"
})