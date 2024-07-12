import { ApiResponse } from "@/types/ApiResponse";
import { check_order_exists } from "@/db/crud/bills/management/read";
import { create_bill } from "@/db/crud/bills/management/create";
import { update_table_status } from "@/db/crud/tables/management/update";
import { read_customer } from "@/db/crud/customers/management/read";
import { create_customer } from "@/db/crud/customers/management/create";
import { create_customer_occassion } from "@/db/crud/customers/occasions/create";

export async function add_bill(data: any): Promise<ApiResponse> {
	try {

		// CRM params
		let customer_name: string | null = data['customer_name'];
		let contact: string | null = data['contact'];
		const email: string | null = data['email'];
		const occassion: string | null = data['occassion'];
		const date: string | null = data['date'];
		const hotel_id: string | null = data['hotel_id'];

		// Bill params
		const order_id: string | null = data['order_id'];
		const total_amount: number | null = data['total_amount'];
		const gst_amount: number | null = data['gst_amount'];
		const menu_total: number | null = data['menu_total'];
		const balance_amount: number | null = data['balance_amount'];
		const discount_amount: number | null = data['discount_amount'];
		const payment_mode: string | null = data['payment_mode'];
		const payment_status: string | null = data['payment_status'];
		const staff_id: string | null = data['staff_id'];
		const table_id: string | null = data['table_id'];

		// Default Invalid Checker
		if (order_id == null || total_amount == null || gst_amount == null || menu_total == null || balance_amount == null || discount_amount == null || payment_mode == null || payment_status == null || staff_id == null || hotel_id == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Existing Bill
		const existingBill = await check_order_exists({ order_id });
		if (existingBill.returncode == 200) {
			return {
				returncode: 400,
				message: "Bill Exists.",
				output: existingBill.output
			};
		}

		// Customer 
		let customer_id;

		if( customer_name != null && contact != null ) {
		
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
		}
		else {
			customer_id = ""
		}

		// Creating the Bill
		const result = await create_bill({
			order_id,
			total_amount,
			gst_amount,
			menu_total,
			balance_amount,
			discount_amount,
			payment_mode,
			payment_status,
			staff_id,
			customer_id
		});

		// Update Table Status as Booked
		if( table_id != null ) {
			await update_table_status({
				table_id,
				status: "Active"
			});
		}

		return {
			returncode: 200,
			message: "Bill Added",
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
