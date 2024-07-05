import { bill_payment } from "@/db/crud/bills/management/update";
import { ApiResponse } from "@/types/ApiResponse";

export async function pay_bill(data: any): Promise<ApiResponse> {
	try {

		const bill_id: string | null = data['bill_id'];
		const balance_amount: number | null = data['balance_amount'];
		const payment_mode: string | null = data['payment_mode'];
		const payment_status: string | null = data['payment_status'];

		// Default Invalid Checker
		if (bill_id == null || balance_amount == null || payment_mode == null || payment_status == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Paying the Bill
		const result = await bill_payment({
			bill_id,
			balance_amount,
			payment_mode,
			payment_status
		});

		return {
			returncode: 200,
			message: "Bill Payment Updated",
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
