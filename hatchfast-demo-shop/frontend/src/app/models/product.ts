
export class Product{
    id!: number;
    name!: string;
    description!: string;
    imageUrl!: string;
    price!: number;

    constructor(id: number, name: string, desc: string, img: string, price: number){
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imageUrl = img;
        this.price = price;
    }

    static getProduct(id: number, name: string, desc: string, img: string, price: number): Product{
        return new Product(id, name, desc, img, price);
    }
}