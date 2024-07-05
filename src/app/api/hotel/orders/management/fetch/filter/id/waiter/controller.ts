import { ApiResponse } from "@/types/ApiResponse";
import { read_orders_by_waiter_id } from "@/db/crud/orders/management/read";

export async function fetch_all_orders(data: any): Promise<ApiResponse> {
	try {

		const waiter_id: string | null = data['waiter_id'];

		// Default Invalid Checker
		if ( waiter_id == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Orders
		const result = await read_orders_by_waiter_id({
			waiter_id
		});

		return {
			returncode: 200,
			message: "Hotel's Orders Fetched",
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
