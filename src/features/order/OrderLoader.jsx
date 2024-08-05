import { getOrder } from "../../services/apiRestaurant";

export async function orderLoader({ params }) {
    return await getOrder(params.orderId);
}