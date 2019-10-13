var endpoint = "https://allergy.documents.azure.com:443/";
var key = "TZyBIeKWflxTqgo40HVgiJKvbzOY0551EUT3ifxtAthuxO6s87Zuq7GoekeWgdSDNW4a2Z0ViQvDP5f9G8QZ7w==";

var databaseId = "allergydb";
var containerId = "restaurants";

const client = new CosmosClient({ endpoint, key });
const { database } = await client.databases.createIfNotExists({ id: databaseId });
const { container } = await client.database(databaseId).containers.createIfNotExists({ id: containerId });
const { item } = await client.database(databaseId).container(containerId).items.create(itemBody);
const querySpec = {
    query: 'SELECT * FROM restaurants'
}

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()
  for (var queryResult of results) {
    let resultString = JSON.stringify(queryResult)
    console.log(`\tQuery returned ${resultString}\n`)
  }
  exports.getMenu = function (){
    return JSON.stringify(results);
  };