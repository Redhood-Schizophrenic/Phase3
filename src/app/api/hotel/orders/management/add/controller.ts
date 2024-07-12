import { ApiResponse } from "@/types/ApiResponse";
import { create_order } from "@/db/crud/orders/management/create";
import { update_table_status } from "@/db/crud/tables/management/update";

export async function add_order(data: any): Promise<ApiResponse> {
	try {

		// Order Params
		const type: string | null = data['type'];
		const table_id: string | null = data['table_id'];
		const waiter_id: string | null = data['waiter_id'];
		const hotel_id: string | null = data['hotel_id'];

		// Default Invalid Checker
		if (hotel_id == null || type == null || waiter_id== null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Update Table Status as Booked
		if( table_id != null ) {
			await update_table_status({
				table_id,
				status: "Booked"
			})
		}

		// Inserting the Order
		const result = await create_order({
			type,
			table_id,
			waiter_id,
			hotel_id
		});

		if(result.returncode != 200)
		{
			return {
				returncode: 200,
				message: "Order Added",
				output: result.output
			};
		}
		else{
			return result;
		}

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
