import db from "@/db/connector";

// Type Filter
interface Typeinterface {
	hotel_id: string,
	type: string
}
export async function read_order_filter({
	hotel_id,
	type
}: Typeinterface) {
	try {

		// Fetching the record
		const result = await db.orders.findMany({
			where: {
				HotelId: hotel_id,
				Type: type
			},
			include: {
				Waiters: true,
				Customers: true
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// All Orders
interface OrdersInterface {
	hotel_id: string
}

export async function read_all_orders({
	hotel_id
}: OrdersInterface) {
	try {

		// Fetching the record
		const result = await db.orders.findMany({
			where: {
				HotelId: hotel_id,
			},
			include: {
				Waiters: true,
				Table: true,
				Customers: true
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Fetch by Table
interface TableInterface {
	table_id: string
}

export async function read_orders_by_table_id({
	table_id
}: TableInterface) {
	try {

		// Fetching the record
		const result = await db.orders.findMany({
			where: {
				TableId: table_id,
			},
			include: {
				Waiters: true,
				Table: true,
				Customers: true
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Fetch by Waiter Id
interface WaiterInterface {
	waiter_id: string
}

export async function read_orders_by_waiter_id({
	waiter_id
}: WaiterInterface) {
	try {

		// Fetching the record
		const result = await db.orders.findMany({
			where: {
				WaiterId: waiter_id,
			},
			include: {
				Waiters: true,
				Table: true,
				Customers: true
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Fetch by Customer Id
interface CustomerInterface {
	customer_id: string
}

export async function read_orders_by_customer_id({
	customer_id
}: CustomerInterface) {
	try {

		// Fetching the record
		const result = await db.orders.findMany({
			where: {
				CustomerId: customer_id,
			},
			include: {
				Waiters: true,
				Table: true,
				Customers: true
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}
