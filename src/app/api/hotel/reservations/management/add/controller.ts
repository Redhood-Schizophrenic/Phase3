import { ApiResponse } from "@/types/ApiResponse";
import { create_reservation } from "@/db/crud/reservations/create";
import { read_customer } from "@/db/crud/customers/management/read";


export async function add_customer(data: any): Promise<ApiResponse> {
	try {

		const date: string | null = data['date'];
		const time: string | null = data['time'];
		const customer_name: string | null = data['customer_name'];
		const hotel_id: string | null = data['hotel_id'];
		const note: string | null = data['occassion'];
		const contact: string | null = data['contact'];

		// Default Invalid Checker
		if (hotel_id == null || customer_name == null || contact == null || date == null || time == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Existing Customer Name
		let existingCustomer: any = await read_customer({ customer_name, contact });

		if (existingCustomer.returncode != 200) {
			existingCustomer = await fetch("http://localhost:3000/api/hotel/customers/management/add", {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				body: JSON.stringify({ customer_name, contact, hotel_id })
			});

			// Check if the response is OK
			if (!existingCustomer.ok) {
				const errorMsg = await existingCustomer.json();
				return {
					returncode: existingCustomer.status,
					message: `Failed to add customer ${customer_name}: ${errorMsg}`,
					output: []
				}
			}

		}

		const customer_id = await existingCustomer.output[0].id;

		// Adding the Customer
		const result = await create_reservation({
			customer_id,
			date,
			time,
			note,
			hotel_id
		});

		return {
			returncode: 200,
			message: "Reservation Added",
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
