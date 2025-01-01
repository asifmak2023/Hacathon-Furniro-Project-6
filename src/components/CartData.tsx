import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartData() {
  return (
    <div className="flex flex-col lg:flex-row h-full mt-12 mx-6 rounded">
      {/* Cart Table */}
      <div className="flex-1">
        <table className="w-full text-sm text-left bg-[#F9F1E7]">
          <thead className="font-bold bg-[#F9F1E7]">
            <tr>
              <td>-</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>-</td>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-500">
            {/* Cart Item */}
            <tr className="h-14 border-b">
              <td></td>
              <td>
                <img
                  src="/images/cart-item1.png"
                  alt="Asgard Sofa"
                  className="w-20 h-20 object-cover bg-[#F9F1E7] rounded-xl"
                />
              </td>
              <td>Asgard Sofa</td>
              <td>
                <div>1</div>
              </td>
              <td>Rs. 250,000.00</td>
              <td className="text-[#B88E2F] hover:text-amber-800 cursor-pointer">
                <button aria-label="Remove Item">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="bg-[#F9F1E7] mx-5 p-6 w-full lg:w-1/3 rounded-md mt-6 lg:mt-0">
        <h2 className="font-bold text-4xl text-center mb-5">Cart Totals</h2>
        <div className="flex justify-between text-lg font-semibold text-gray-700 mb-4">
          <p>Total:</p>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-700 mb-4">
          <p>Subtotal:</p>
          <span>Rs. 250,000.00</span>
        </div>
        <button className="bg-black text-white p-3 w-full hover:bg-amber-700 transition-colors rounded-md mt-6">
          Check Out
        </button>
      </div>
    </div>
  );
}
