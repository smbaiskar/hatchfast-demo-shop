import { Product } from "../../models/product";

export class AppHelper {
    static shopProducts: Product[] = [
        new Product(111, "Water Bottle", "A handy water bottle for you", "bottle.jpeg", 14.99 ),
        new Product(222, "Tshirt", "Minimalist tees for all day use", "Tshirt.jpg", 14.99 ),
        new Product(333, "Cabinet Set", "Colorful cabinet set for your interiors", "Cabinet.jpg", 14.99 ),
        new Product(444, "Trousers", "Pair of trousers for office wear", "trousers.jpg", 14.99 ),
        new Product(555, "Headphones", "Headphones with best sound quality", "Headphones.jpg", 14.99 ),
        new Product(666, "Backpack", "A wellsuited multipurpose backpack", "backpack.jpg", 14.99 ),
        new Product(777, "Bicycle", "Bright colored geared bicycle for fitness", "Bicycle.jpg", 14.99 ),
        new Product(888, "Microwave Oven", "Microwave oven for kitchen essentials", "Microwave Oven.jpg", 14.99 )
      ]

    static cartProducts: Product[] = []

    static getAllProducts() : Product []{
        return this.shopProducts
    }

    static getProductForId(productId: number) {
        return this.shopProducts.find(item => item.id == productId)
    }

    static addToCart(productId: number) {
        let prod = this.getProductForId(productId) 
        if(prod){
            this.cartProducts.push(prod)
        }else{
            alert('Product Not Found')
        }
    }

    static removeFrom(productId: number) {
        let prod = this.cartProducts.find(item => item.id == productId) 
        if(prod){
            const index = this.cartProducts.indexOf(prod);
            if (index > -1) { // only splice array when item is found
                this.cartProducts.splice(index, 1); // 2nd parameter means remove one item only
            }else{
                alert('Product Not Present in the Cart')
            }
        }else{
            alert('Product Not Present in the Cart')
        }
    }

    static getCartElementsCount(){
        return this.cartProducts.length;
    }
}