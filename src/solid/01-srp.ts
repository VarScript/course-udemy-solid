(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    class ProductService { 

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        private masterEmail: string = 'fabio@gmail.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-adminds') {
            console.log( 'Send emails to the clients', template );
        }

    }


    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }

        notifyClients() {
            this.mailer.sendEmail(['eduardo@google.com'], 'to-clients')
        }

    }

    class CartBloc{

        private  itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }

    const productService = new ProductService();
    const mailer = new Mailer();


    const productBloc = new ProductBloc( productService, mailer);
    const cardBloc    =new CartBloc();


    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cardBloc.addToCart(10);


})();