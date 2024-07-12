import { ApiResponse } from "@/types/ApiResponse";
import { create_order } from "@/db/crud/orders/management/create";
import { update_table_status } from "@/db/crud/tables/management/update";

interface MenuOrder {
	quantity: string,
	menu_id: string,
	note: string | null
}

interface MenuRequestOrder {
	quantity: string,
	menu_id: string,
	order_id: string,
	note: string | null
}


export async function add__order(data: any): Promise<ApiResponse> {
	try {

		// Order Params
		const type: string | null = data['type'];
		const table_id: string | null = data['table_id'];
		const waiter_id: string | null = data['waiter_id'];
		const hotel_id: string | null = data['hotel_id'];
		const menu_data: Array<MenuOrder> | any | null = data['menu_data'];


		// Default Invalid Checker
		if (hotel_id == null || type == null || waiter_id == null || menu_data == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Update Table Status as Booked
		if (table_id != null) {
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

		if (result.returncode == 200) {
			await menu_data.forEach((element: MenuOrder) => {

				let menu_id: string | null = element['menu_id'];
				let quantity: string | null = element['quantity'];
				let note: string | null = element['note'];
				let order_id: string  = result.output[0].id;

				let menu_request: MenuRequestOrder = {
					menu_id,
					quantity,
					note,
					order_id
				}

				try {
					fetch("http://localhost:3000/api/hotel/orders/menus/add/", {
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						method: "POST",
						body: JSON.stringify(menu_request)
					});

				} catch (error) {
					console.error(error);
				}
			});

			return {
				returncode: 200,
				message: "Order Added",
				output: result
			};

		}
		else {
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
