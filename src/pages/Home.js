import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";

function Home() {
    return (
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
            {/* <SignUp></SignUp> */}
            {/* <LoginPage></LoginPage> */}
        </div>
    )
}

export default Home;