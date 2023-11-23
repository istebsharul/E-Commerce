export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:3000/products/' + id)
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10} 
  // TODO : on server we will support multi values in filter
  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }
  console.log(pagination)
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }


  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:3000/products?' + queryString)
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({ data: { products: data, totalItems: +totalItems } })
  }
  );
}


export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/categories')
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/brands')
    const data = await response.json()
    resolve({ data })
  }
  );
}

// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     const response = await fetch('http://localhost:3000/products')
//     const data = await response.json()
//     resolve({ data })
//   }
//   );
// }

// export function fetchProductById(id) {
//   return new Promise(async (resolve) => {
//     const response = await fetch('http://localhost:3000/products/' + id)
//     const data = await response.json()
//     resolve({ data })
//   }
//   );
// }

// export function fetchProductsByFilters(filter, sort, pagination) {
//   // filter = {"category":["smartphone","laptops"]}
//   // sort = {_sort:"price",_order="desc"}

//   let queryString = '';
//   for (let key in filter) {
//     const categoryValues = filter[key];
//     if (categoryValues.length) {
//       const lastCategoryValue = categoryValues[categoryValues.length - 1]
//       queryString += `${key}=${lastCategoryValue}&`
//     }
//   }
//   for (let key in sort) {
//     queryString += `${key}=${sort[key]}&`
//   }

//   console.log(pagination)
//   for (let key in pagination) {
//     queryString += `${key}=${sort[key]}&`
//   }

//   return new Promise(async (resolve) => {
//     const response = await fetch('http://localhost:3000/products?' + queryString)
//     const data = await response.json()
//     const totalItems = response.headers.get('X-Total-Count')
//     resolve({ data: { products: data, totalItems: +totalItems } })
//   }
//   );
// }

// export function fetchCategories() {
//   return new Promise(async (resolve) => {
//     const response = await fetch('http://localhost:3000/categories')
//     const data = await response.json()
//     resolve({ data })
//   }
//   );
// }

// export function fetchBrands() {
//   return new Promise(async (resolve) => {
//     const response = await fetch('http://localhost:3000/brands')
//     const data = await response.json()
//     resolve({ data })
//   }
//   );
// }