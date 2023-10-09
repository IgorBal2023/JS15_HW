// Server Mock
class ProductsService {
  static async allProduct() {
    try {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }
  static async singleProduct(id) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }
  static async searchProduct(nameSearch) {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${nameSearch}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }

  static async limitProduct(limit, skip, select) {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }
  static async getAllCategories() {
    try {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }
  static async getCatigories(categories) {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${categories}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }
  static async addNewProduct(addProduct) {
    try {
      const res = await fetch(`https://dummyjson.com/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addProduct),
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }
  static async updateProduct(id, updateProd) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateProd),
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error!`);
    }
  }
  static async deleteProduct(idDelete) {
    try {
      const dataDeleteArr = [];
      for (let i = 0; i < idDelete.length; i++) {
        const res = await fetch(
          `https://dummyjson.com/products/${idDelete[i]}`,
          {
            method: "DELETE",
          }
        );
        if (res.status === 200 || res.status === 204) {
          console.log(
            `product with ID ${idDelete[i]} was successfully removed`
          );
        } else if (res.status === 404) {
          console.error(
            `product with ID ${idDelete[i]} is not in the database`
          );
        }
        const data = await res.json();
        dataDeleteArr.push(data);
      }
      return dataDeleteArr;
    } catch (error) {
      console.error(`Error!`);
    }
  }
}

const newAddProduct = {
  title: `BMW pencil`,
  price: 19.99,
};

const newUpdateProduct = {
  title: `Honor 8x`,
  price: 299.99,
};

const arrIdDelete = [1, 2, 3, 4];
const randomId = Math.floor(Math.random() * 1000 - 5 + 5);
arrIdDelete.push(randomId);

ProductsService.allProduct();
ProductsService.singleProduct(3);
ProductsService.searchProduct(`phone`);
ProductsService.limitProduct(12, 10, `title,price`);
ProductsService.getAllCategories();
ProductsService.getCatigories(`smartphones`);
ProductsService.addNewProduct(newAddProduct);
ProductsService.updateProduct(5, newUpdateProduct);
ProductsService.deleteProduct(arrIdDelete);
