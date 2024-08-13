import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { dcreaseQuantity, increaseQuantity } from "./CartSlice";

function UpdateItemQuantity({id, children}) {
    const dispatch = useDispatch();

    function handleDecrease(id) {
        dispatch(dcreaseQuantity(id));
        console.log(id);
    }
    function handleIncrease(id) {
        dispatch(increaseQuantity(id));
        console.log(id);
    }
    return (
        <div className="flex gap-2 sm:gap-3 mx-2 sm:mx-6">
            <Button type="change" task={handleDecrease} item={id}>-</Button>
            <span className="pt-3 sm:pt-5 font-medium sm:font-semibold lg:font-extrabold">{children}</span>
            <Button type="change" task={handleIncrease} item={id}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
