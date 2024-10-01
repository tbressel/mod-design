import CryptoJS from "crypto-js";

export async function getArticles() {
  return fetch("./datas/products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! : ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      // check if data has changed then update the local storage or not
      isDataChanged(jsonData);
    })
    .catch((error) => {
      console.error("Oupsss, y'a une couille dans l'pâté! : ", error);
    });
}



/**
 *
 * Function to generate a MD5 hash from a JSON object
 *
 * @param {*} jsonData
 * @returns
 */
function generateMD5(jsonData) {
  const hash = CryptoJS.MD5(JSON.stringify(jsonData));
  return hash.toString(CryptoJS.enc.Hex);
}



/**
 *
 * Function to update the local storage if the data has changed
 *
 * @param {*} jsonData
 */
function isDataChanged(jsonData) {
  const newHash = generateMD5(jsonData);
  const storedHash = localStorage.getItem("jsonDataHash");

  if (newHash !== storedHash) {
    localStorage.setItem("jsonDataHash", newHash);
    localStorage.setItem("jsonData", JSON.stringify(jsonData));
    console.log("updated datas");
  } else {
    console.log("no update needed");
  }
}




/**
 *
 * Function to get the 4 most recent objects
 *
 * @param {*} data
 * @returns
 */
export function getRecentProducts(data) {
  return data
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 4);
}


