const product = { name: 'микроволновка', price: 8676 };
function showProduct(discount, city) {
    let priceWithDiscount = this.price - (this.price * discount / 100);
    console.log(`Товар: ${this.name}`);
    console.log(`Цена со скидкой ${discount}%: ${priceWithDiscount} руб.`);
    console.log(`Город: ${city}`);
}
console.log('Вызов CALL()');
showProduct.call(product, 20, 'Екатеринбург');
console.log('Вызов APPLY()');
showProduct.apply(product, [20, 'Екатеринбург']);