import { ApiResponse } from "@/types/ApiResponse";
import { read_cancelled_order_menus } from "@/db/crud/orders/cancelled_orders/read";

export async function fetch_all_cancelled_orders(data: any): Promise<ApiResponse> {
	try {

		const order_id: string | null = data['order_id'];

		// Default Invalid Checker
		if ( order_id == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Orders
		const result = await read_cancelled_order_menus({
			order_id
		});

		return {
			returncode: 200,
			message: "Hotel's Cancelled Orders Fetched",
			output: result.output
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
