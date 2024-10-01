
export async function getArticles() {
  return fetch('./datas/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! : ${response.status}`);
      }
      return response.json();
    })
    .then(jsonData => {
      console.log('Données récupérées :', jsonData); 
    })
    .catch(error => {
      console.error('Oupsss, y\'a une couille dans l\'pâté! : ', error);
    });
}