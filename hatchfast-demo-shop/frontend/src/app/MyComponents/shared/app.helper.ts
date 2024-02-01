import { Subject } from "rxjs";
import { Product } from "../../models/product";

export class AppHelper {
    static getLoggedInUserSuject() {
      throw new Error('Method not implemented.');
    }


    private static LoggedInUserSubject:Subject<boolean>=new Subject<boolean>();
    private static LoggedInUser:any=null;
    private static cartSubject: Subject<boolean> = new Subject<boolean>();
    


    static shopProducts: Product[] = [
        new Product(111, "Water Bottle", "A handy water bottle for you", "waterBottle.jpg", 14.99 ),
        new Product(222, "Tshirt", "Minimalist tees for all day use", "Tshirt.jpg", 9.99 ),
        new Product(333, "Cabinet Set", "Colorful cabinet set for your interiors", "Cabinet.jpg", 49.99 ),
        new Product(444, "Trousers", "Pair of trousers for office wear", "trousers.jpg", 11.99 ),
        new Product(555, "Headphones", "Headphones with best sound quality", "Headphones.jpg", 29.99 ),
        new Product(666, "Backpack", "A wellsuited multipurpose backpack", "backpack.jpg", 34.99 ),
        new Product(777, "Bicycle", "Bright colored geared bicycle for fitness", "Bicycle.jpg", 39.99 ),
        new Product(888, "Microwave Oven", "Microwave oven for kitchen essentials", "Microwave Oven.jpg", 59.99 )
      ]

    static cartProducts: Product[] = []

    static getAllProducts() : Product []{
        return this.shopProducts
    }

    static getCartProducts() : Product []{

        if(!this.cartProducts || this.cartProducts.length == 0){
            if (typeof window !== 'undefined') {
                console.log('we are running on the client')
                let sessionCartProductsStr: any = sessionStorage.getItem("DemoCartProducts")
                if (sessionCartProductsStr) {
                    this.cartProducts = JSON.parse(sessionCartProductsStr)
                }else{
                    this.cartProducts = []
                }
            }  
        }
        return this.cartProducts
    }

    private static updateSessionCartProducts(){
        if (typeof window !== 'undefined') {
            console.log('we are running on the client')
            if(!this.cartProducts){
                this.cartProducts = []
            }
            let sessionCartProductsStr = JSON.stringify(this.cartProducts)
            sessionStorage.setItem("DemoCartProducts", sessionCartProductsStr)
        }  
        this.cartSubject.next(true)
    }

    static getProductForId(productId: number) {
        return this.shopProducts.find(item => item.id == productId)
    }

    static addToCart(productId: number) {
        let prod = this.getProductForId(productId) 
        if(prod){
            if(this.cartProducts.indexOf(prod) >=0){
                this.removeFrom(productId)
            }else{
                this.cartProducts.push(prod)
            }
            
        }else{
            alert('Product Not Found')
        }
        this.updateSessionCartProducts()
        // this.cartSubject.next(true)
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

        this.updateSessionCartProducts()
        
    }

    static getCartElementsCount(){
        return this.cartProducts.length;
    }

    static getCartSubject() : Subject<boolean> {
     
        return this.cartSubject;
    }
    static getLoggedInUserSubject()
    {
        return this.LoggedInUserSubject;
    }
    static setLoggedInUser(user:any)
    {
        
        this.LoggedInUser=user;
        if (typeof window !== 'undefined') {
            console.log('we are running on the client')
            sessionStorage.setItem("DemoLoggedInUser", user ? user.userName : "")
        }    
        this.LoggedInUserSubject.next(this.LoggedInUser!=null)

    }

    static clearCart(){
        this.cartProducts = [];
        this.updateSessionCartProducts()
    }
    


}