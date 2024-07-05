import { ApiResponse } from "@/types/ApiResponse";
import { read_hotel_cancelled_orders } from "@/db/crud/orders/cancelled_orders/read";

export async function fetch_all_hotel_cancelled_orders(data: any): Promise<ApiResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];

		// Default Invalid Checker
		if ( hotel_id == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Orders
		const result = await read_hotel_cancelled_orders({
			hotel_id
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
