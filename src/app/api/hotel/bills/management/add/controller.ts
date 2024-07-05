import { ApiResponse } from "@/types/ApiResponse";
import { check_order_exists } from "@/db/crud/bills/management/read";
import { create_bill } from "@/db/crud/bills/management/create";

export async function add_bill(data: any): Promise<ApiResponse> {
	try {

		const order_id: string | null = data['order_id'];
		const total_amount: number | null = data['total_amount'];
		const gst_amount: number | null = data['gst_amount'];
		const menu_total: number | null = data['menu_total'];
		const balance_amount: number | null = data['balance_amount'];
		const discount_amount: number | null = data['discount_amount'];
		const payment_mode: string | null = data['payment_mode'];
		const payment_status: string | null = data['payment_status'];
		const staff_id: string | null = data['staff_id'];

		// Default Invalid Checker
		if (order_id == null || total_amount == null || gst_amount == null || menu_total == null || balance_amount == null || discount_amount == null || payment_mode == null || payment_status == null || staff_id == null) {
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
			staff_id
		});

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