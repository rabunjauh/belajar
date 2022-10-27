// Props cara pertama
// const ProductList = (props) => {
//   return (
//     <div>
//         <ul>
//             {/* untuk menggunakan jsx syntax di dalam arrow function parentheses / {} diganti dengan bracket / () */}
//             {props.products.map((product) => (
//             <li key={product.id}>{product.title} - {product.price}</li>
//             ))}
//         </ul>
//   </div>
//   )
// }

// Props cara kedua
// const ProductList = ({products}) => {
//     return (
//       <div>
//           <ul>
//               {/* untuk menggunakan jsx syntax di dalam arrow function parentheses / {} diganti dengan bracket / () */}
//               {products.map((product) => (
//               <li key={product.id}>{product.title} - {product.price}</li>
//               ))}
//           </ul>
//     </div>
//     )
//   }

// Props sebagai function utk mengirim data dari komponen child ke komponen induk 
// digunakan pada tombol delete
const ProductList = ({products, deleteProduct}) => {
return (
    <div>
        <ul>
            {/* untuk menggunakan jsx syntax di dalam arrow function parentheses / {} diganti dengan bracket / () */}
            {products.map((product) => (
            <li key={product.id}>{product.title} - {product.price} 
            <button onClick={() => deleteProduct(product.id)}>Delete</button></li>
            ))}
        </ul>
    </div>
)
};

export default ProductList