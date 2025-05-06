type Size = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
    constructor(

        public name = '',
        public price = 0,
        public size: Size = '',


    ) {
    }

    toString() {
        // No Dry
        if (this.name.length <= 0) throw Error('Name is empty');
        if (this.price <= 0) throw Error('Price is zero');
        if (this.size.length <= 0) throw Error('Size is empty');

        return `${this.name} (${this.price}) ,${this.size}`;
    }
}


(() => {
    const bluePants = new Product('Blue Pants', 10, 'L');
    console.log(bluePants.toString());
})