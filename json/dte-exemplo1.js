{
  "versao": "1.00",
  "chave": "DTe31220800000000000191123456789012341123456786",
  "identificacao": {
    "carregamentoPosterior": false,
    "dhGeracao": "2022-08-15T01:01:01-03:00",
    "dhPrevIniViagem": "2022-08-16T01:01:01-03:00",
    "percurso": [
      "PR",
      "SP"
    ],
    "requerente": {
      "cnpj": "00000000000191",
      "tipo": 1
    },
    "transportador": {
      "cpf": "88769917000",
      "tipo": 2
    },
    "ufFim": "MG",
    "ufIni": "SC",
    "carregamento": {
      "local": {
        "municipio": {
          "codigoIBGE": 4205407
        },
        "bairro": "Curupira",
        "cep": "12345678",
        "complemento": "Lote 02 Quadra J",
        "localizacao": {
          "latitude": -27.5935,
          "longitude": -48.55854
        },
        "logradouro": "Rua dos Testes",
        "numero": "123 fundos"
      },
      "responsavel": {
        "cnpj": "82951351000142"
      }
    },
    "descarregamentos": [
      {
        "consignatario": {
          "cpf": "57626759044",
          "email": "email@teste.com"
        },
        "local": {
          "municipio": {
            "codigoIBGE": 3106200
          },
          "bairro": "Pao de Queijo",
          "cep": "87654321",
          "complemento": "apto 101",
          "localizacao": {
            "latitude": -27.5935,
            "longitude": -48.55854
          },
          "logradouro": "Rua dos Padeiros",
          "numero": "1010"
        }
      },
      {
        "consignatario": {
          "cnpj": "54878708000179",
          "email": "email@teste.com"
        },
        "local": {
          "municipio": {
            "codigoIBGE": 3151800
          },
          "bairro": "Mineiro",
          "cep": "12345678",
          "complemento": "Sala 3",
          "localizacao": {
            "latitude": -27.5935,
            "longitude": -48.55854
          },
          "logradouro": "Avenida das Pimentas",
          "numero": "550"
        }
      }
    ]
  },
  "modais": [
    {
      "rodoviario": {
        "versao": "1.00",
        "retornoVazio": false,
        "codigoAgendamentoPorto": "454542",
        "contratantes": [
          {
            "cpf": "95696964001"
          },
          {
            "cnpj": "66196308000162"
          },
          {
            "idEstrangeiro": "abc123"
          }
        ],
        "pagamentos": [
          {
            "altoDesempenho": false,
            "componentes": [
              {
                "tipo": 1,
                "valor": 150
              },
              {
                "descricao": "pgto de dívida",
                "tipo": 99,
                "valor": 500
              }
            ],
            "formaPagamento": 0,
            "pagador": {
              "cpf": "72678493008"
            },
            "informacoesBancarias": {
              "tipoPagamento": 2,
              "codigoInstituicaoFinanceira": "001",
              "numeroAgencia": 999,
              "numeroConta": 999999,
              "cpf": "95666703030"
            },
            "valorContrato": 650
          },
          {
            "altoDesempenho": false,
            "componentes": [
              {
                "tipo": 4,
                "valor": 12000
              }
            ],
            "formaPagamento": 1,
            "pagador": {
              "cnpj": "85473064000162"
            },
            "parcelas": [
              {
                "numero": 1,
                "valor": 3000.85,
                "vencimento": "2022-05-01"
              },
              {
                "numero": 2,
                "valor": 3000.99,
                "vencimento": "2022-06-01"
              },
              {
                "numero": 3,
                "valor": 3000.01,
                "vencimento": "2022-07-01"
              }
            ],
            "informacoesBancarias": {
              "tipoPagamento": 2,
              "codigoInstituicaoFinanceira": "001",
              "numeroAgencia": 999,
              "numeroConta": 999999,
              "cpf": "95666703030"
            },
            "valorAdiantamento": 3000,
            "valorContrato": 12000
          }
        ],
        "valePedagio": {
          "dispositivos": [
            {
              "combinacaoVeicular": 2,
              "fornecedor": {
                "cnpj": "31496831000120"
              },
              "numeroCompra": "12345678901234567000",
              "pagador": {
                "cnpj": "67800047000100"
              },
              "tipo": 1,
              "valor": 75
            },
            {
              "fornecedor": {
                "cnpj": "56020649000129"
              },
              "combinacaoVeicular": 2,
              "numeroCompra": "12345678901234567000",
              "pagador": {
                "cnpj": "13252541000159"
              },
              "tipo": 1,
              "valor": 75
            }
          ]
        },
        "veiculosReboque": [
          {
            "capacidadeKG": 123456,
            "capacidadeM3": 123,
            "codigoInterno": "1234567890",
            "placa": "ABC1234",
            "proprietario": {
              "cnpj": "29384626000120",
              "tipo": 1
            },
            "tara": 123456,
            "tipoCarroceria": 1
          },
          {
            "capacidadeKG": 123456,
            "capacidadeM3": 123,
            "codigoInterno": "1234567891",
            "placa": "ABC1234",
            "proprietario": {
              "cnpj": "53198599000186",
              "tipo": 1
            },
            "tara": 123456,
            "tipoCarroceria": 1
          }
        ],
        "veiculoTracao": {
          "capacidadeKG": 123456,
          "capacidadeM3": 123,
          "codigoInterno": "1234567890",
          "condutores": [
            {
              "cpf": "88769917000"
            },
            {
              "cpf": "98972631019"
            }
          ],
          "placa": "ABC1234",
          "proprietario": {
            "cpf": "20140741003",
            "tipo": 1
          },
          "tara": 123456,
          "tipoCarroceria": 1,
          "tipoRodado": 1
        }
      }
    }
  ],
  "seguros": [
    {
      "numeroApolice": "1",
      "numeroAverbacoes": [
        "123"
      ],
      "responsavel": {
        "cnpj": "68305316000125",
        "tipo": 1
      },
      "seguradora": {
        "cnpj": "09473193000172"
      }
    },
    {
      "numeroApolice": "2",
      "numeroAverbacoes": [
        "456",
        "1010"
      ],
      "responsavel": {
        "cpf": "96621218036",
        "tipo": 2
      },
      "seguradora": {
        "cnpj": "05884349000157"
      }
    }
  ],
  "produtoPredominante": {
    "cargaPerigosa": true,
    "ncm": "12345678",
    "nome": "Soja",
    "tipoCarga": 1
  },
  "totalizadores": {
    "pesoBrutoEmToneladas": 100000,
    "valorTotalCargas": 500000
  },
  "geradora": {
    "cnpj": "50051881000148",
    "contato": "teste",
    "email": "a@a.com",
    "telefone": "123456789012"
  }
}