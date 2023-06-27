// Mostrar as coleções criadas
// show collections


db.clientes.insertMany([
    {
        "nome": "Mateus da Silva",
        "Endereco": "Rua Amazonas, 144 - Igra - Torres - RS",
        "Telefone": "51998955854"
    },
    {
        "nome": "Luan Silveira",
        "Endereco": "Rua Pará, 222 - Igra Sul - Torres - RS",
        "Telefone": "51998958554"
    },
    {
        "nome": "Roger Silva",
        "Endereco": "Rua Catarina, 333 - Praia da Cal - Torres - RS",
        "Telefone": "51998958533"
    },
    {
        "nome": "Rosa Maria",
        "Endereco": "Rua Fernandes, 2 - Centro - Torres - RS",
        "Telefone": "51988958554"
    },
    {
        "nome": "Luana Schimidt",
        "Endereco": "Rua Rodrigues, 2 - Centro - Torres - RS",
        "Telefone": "51987795854"
    }
]);
//-------------------------------------------------------------
db.categoria_pizza.insertMany([
    {
        "nome": "Especial",
        "Descricao": "Camarao, files e frutos do mar"
    },
    {
        "nome": "Tradiconal",
        "Descricao": "Carne, frango e vegetarianas"
    }
]);
//--------------------------------------------------------------
db.entregadores.insertMany([
    {
        "nome": "Marcelo Delano",
        "Telefone": "51985698565"
    },
    {
        "nome": "Lucas Rosa",
        "Telefone": "51996658598"
    },
    {
        "nome": "Mateus Luan",
        "Telefone": "51988856554"
    }
]);
//--------------------------------------------------------------
db.funcionarios.insertMany([
    {
        "nome": "Fernandos Fulano",
        "Telefone": "51985698547"
    },
    {
        "nome": "Maria Costa",
        "Telefone": "51998958598"
    },
    {
        "nome": "Robson Rodrigues",
        "Telefone": "51998956554"
    }
]);
//--------------------------------------------------------------
db.tipo_pagamento.insertMany([
    {
        "nome": "Dinheiro"
    },
    {
        "nome": "Pix"
    },
    {
        "nome": "Cartão de Crédito"
    }
]);
//--------------------------------------------------------------
db.pizzas.insertMany([
    {
        "nome": "Calabresa",
        "descricao": "calabresa defumada e queijo",
        "valor": "50.00",
        "categoria_pizza_id": {
            "$oid": "649a516a7bd851dbf34e4dd0"
          },

    },
    {
        "nome": "Quatro queijos",
        "descricao": "Mussarela, parmesao, lanche e gorgonzola.",
        "valor": "45.00",
        "categoria_pizza_id": {
            "$oid": "649a516a7bd851dbf34e4dd1"
          },

    },
    {
        "nome": "Banana com doce de leite",
        "descricao": "Banana prata e doce de leite caseiro",
        "valor": "60.00",
        "categoria_pizza_id": {
            "$oid": "649a516a7bd851dbf34e4dd1"
          },

    },
    {
        "nome": "Morango com chocolate",
        "descricao": "Morangos com chocolate amargo",
        "valor": "75.00",
        "categoria_pizza_id": {
            "$oid": "649a516a7bd851dbf34e4dd0"
          },

    },
]);
//--------------------------------------------------------------
db.bebidas.insertMany([
    {
        "nome": "Refrigerante lata",
        "descricao": "Refrigerante lata 330ml",
        "valor": "6.00",
    },
    {
        "nome": "Água mineral",
        "descricao": "água mineral com/sem gás 500ml",
        "valor": "4.00",
    },
    {
        "nome": "Cerveja long neck",
        "descricao": "Cerveja tradicional 330ml",
        "valor": "10.00",
    },
    {
        "nome": "Suco de frutas",
        "descricao": "Suco de laranja, uva ou limão",
        "valor": "9.00",
    }
]);
//--------------------------------------------------------------
db.pedidos.insertMany([
    {
        "data_hora": new Date("<YYYY-mm-ddTHH:MM:ss>"),
        "cliente_id": {
            "$oid": "649a50e47bd851dbf34e4dcb"
          },
        "funcionario_id": {
            "$oid": "649a51fe7bd851dbf34e4dd6"
          },
        "item_pizza": [{"pizzas_id": {
            "$oid": "649b168f90a45ad1ba30bf62"
          }, "quantidade": 1, "tamanho": "pequena"}],
        "item_bebida": [{"bebidas_id": {
            "$oid": "649b179090a45ad1ba30bf66"
          }, "quantidade": 2}],
        "pagamentos": [{"tipo_pagamento_id": {
            "$oid": "649b13c090a45ad1ba30bf5f"
          }, "observacoes": "pagamento na entrega"}],
        "destino": "Interno"  
    },
    {
        "data_hora": new Date("<YYYY-mm-ddTHH:MM:ss>"),
        "cliente_id": {
            "$oid": "649a50e47bd851dbf34e4dcc"
          },
        "funcionario_id": {
            "$oid": "649a51fe7bd851dbf34e4dd6"
          },
        "item_pizza": [{"pizzas_id": {
            "$oid": "649b168f90a45ad1ba30bf63"
          }, "quantidade": 2, "tamanho": "média"}],
        "item_bebida": [{"bebidas_id": {
            "$oid": "649b179090a45ad1ba30bf67"
          }, "quantidade": 5}],
        "pagamentos": [{"tipo_pagamento_id": {
            "$oid": "649b13c090a45ad1ba30bf60"
          }, "observacoes": "pagamento na entrega"}],
        "destino": "Entrega"  
    },
    {
        "data_hora": new Date("<YYYY-mm-ddTHH:MM:ss>"),
        "cliente_id": {
            "$oid": "649a50e47bd851dbf34e4dcd"
          },
        "funcionario_id": {
            "$oid": "649a51fe7bd851dbf34e4dd7"
          },
        "item_pizza": [{"pizzas_id": {
            "$oid": "649b168f90a45ad1ba30bf64"
          }, "quantidade": 4, "tamanho": "grande"}],
        "item_bebida": [{"bebidas_id": {
            "$oid": "649b179090a45ad1ba30bf68"
          }, "quantidade": 10}],
        "pagamentos": [{"tipo_pagamento_id": {
            "$oid": "649b13c090a45ad1ba30bf61"
          }, "observacoes": "pagamento na entrega"}],
        "destino": "Entrega"  
    },

]);
//--------------------------------------------------------------
db.entregas.insertMany([
    {
        "entregador_id": {
            "$oid": "649a51b67bd851dbf34e4dd2"
          },
        "pedido_id": {
            "$oid": "649b1c5f90a45ad1ba30bf6a"
          },
        "valor_entrega": "15.00",
        "observacao": "entrega na portaria"
    },
    {
        "entregador_id": {
            "$oid": "649a51b67bd851dbf34e4dd3"
          },
        "pedido_id": {
            "$oid": "649b1c5f90a45ad1ba30bf6b"
          },
        "valor_entrega": "10.00",
        "observacao": "ligar 5198989898"
    },
    {
        "entregador_id": {
            "$oid": "649a51b67bd851dbf34e4dd4"
          },
        "pedido_id": {
            "$oid": "649b1c5f90a45ad1ba30bf6c"
          },
        "valor_entrega": "7.00",
        "observacao": "loja doces e sonhos"
    },
]);




















