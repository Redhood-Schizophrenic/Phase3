import { ApiResponse } from "@/types/ApiResponse";
import { read_customer } from "@/db/crud/customers/management/read";
import { create_customer } from "@/db/crud/customers/management/create";
import { create_customer_occassion } from "@/db/crud/customers/occasions/create";
import { create_order } from "@/db/crud/orders/management/create";
import { update_table_status } from "@/db/crud/tables/management/update";

export async function add_order(data: any): Promise<ApiResponse> {
	try {

		// CRM params
		const customer_name: string | null = data['customer_name'];
		const contact: string | null = data['contact'];
		const email: string | null = data['email'];
		const occassion: string | null = data['occassion'];
		const date: string | null = data['date'];

		// Order Params
		const type: string | null = data['type'];
		const table_id: string | null = data['table_id'];
		const waiter_id: string | null = data['waiter_id'];
		const hotel_id: string | null = data['hotel_id'];

		// Default Invalid Checker
		if (hotel_id == null || customer_name == null || contact == null || type == null || waiter_id== null ) {
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

		let customer_id;
		// Existing Customer
		const existingCustomer = await read_customer({ customer_name, contact });
		if (existingCustomer.returncode != 200) {
			
			// Adding the Customer
			const result = await create_customer({
				customer_name,
				contact,
				email,
				hotel_id
			});

			customer_id = result.output.id;
			// If occassion exists
			if (occassion != null && date != null) {
				await create_customer_occassion({
					customer_id: customer_id,
					occassion,
					date
				})
			}
		}
		else {
			customer_id = existingCustomer.output[0].id;
		}

		// Inserting the Order
		const result = await create_order({
			type,
			table_id,
			customer_id,
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
