import { ApiResponse } from "@/types/ApiResponse";

interface MenuOrder {
	quantity: string,
	menu_id: string,
	order_id: string
}

export async function add_menu_order(data: any): Promise<ApiResponse> {
	try {

		const response_data: Array<MenuOrder> | any | null = data['data'];

		// Default Invalid Checker
		if (response_data == null) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// console.log(response_data)

		response_data.forEach((element: MenuOrder) => {
			try {
				console.log(element);
				fetch("http://localhost:3000/api/hotel/orders/menus/add/", {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					method: "POST",
					body: JSON.stringify(element)
				});

			} catch (error) {
				console.error(error);
			}
		});

		return {
			returncode: 200,
			message: "Menu Orders Added",
			output: []
		};
	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}