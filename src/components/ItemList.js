import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  // a function dispatch which we get from hook useDispatch given to us by react-redux
  const dispatch = useDispatch();

  // function for dispatching an action
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-8 m-2 border-[#e4e5e9] border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className=" py-2">
              <span className="font-bold text-[#414449]">
                {item.card.info.name}
              </span>
              <span className="font-bold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <div>
              <p className="text-xs text-[#676a6d]">
                {item.card.info.description}
              </p>
            </div>
          </div>

          <div className="w-[170px] h-[120px] ml-3 relative">
            <img src={CDN_URL + item.card.info.imageId} className="rounded-xl w-[100%] h-[100%] object-cover" />
            <div className="absolute top-[100px] left-[22px] ">
              <button className="p-2 bg-white shadow-lg border border-[#cccdcf] m-auto text-[#1ba672] font-bold rounded-lg w-[120]" onClick={() => handleAddItem(item)}>
                ADD +</button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
