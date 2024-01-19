
export class Product{
    name!: string;
    description!: string;
    imageUrl!: string;
    price!: number;

    constructor(name: string, desc: string, img: string, price: number){
        this.name = name;
        this.description = desc;
        this.imageUrl = img;
        this.price = price;
    }

    static getProduct(name: string, desc: string, img: string, price: number): Product{
        return new Product(name, desc, img, price);
    }
}