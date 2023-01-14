# seletivo-IN8

### Para rodar o projeto:

Após clonar o repositório na sua máquina, execute os seguintes comandos:

##### seletivo-in8$ `npm i`
##### seletivo-in8$ `npm run dev`

![alt text](https://github.com/julioreisdev/seletivo-in8/blob/main/server-example.png?raw=true)

E tá pronto o sorvetinho!

### Para testar:

Faça uma requisição GET em /scraper, e no body coloque os seguintes dados:

Body: `{
  "url": "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops",
  "scraperParam": ".col-sm-4.col-lg-4.col-md-4",
  "filter": "Lenovo"
}`

Doc:
{
  ##### url: o link da página que deseja fazer o scraper(obrigatório)
  ##### scraperParam: identificador de um item da lista a sofrer scraping(obrigatório)
  ##### filter: filtro de conteúdo(opicional)
}

![alt text](https://github.com/julioreisdev/seletivo-in8/blob/main/thunderclient-example.png?raw=true)
