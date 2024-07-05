# API Requests

----------------------------------------------------------------------------------

### Bills Management Module

###### 1. Add
http://localhost:3000/api/hotel/bills/management/add
`POST`
```json
{
    "order_id": "40bc3ad1-41ac-431a-b9a4-69672a5e1c40",
    "total_amount": 9000.00,
    "gst_amount": 500.00,
    "menu_total": 8500.00,
    "balance_amount": 4000.00,
    "discount_amount": 0.00,
    "payment_mode": "Cash",
    "payment_status": "Part Paid",
    "staff_id": "b5c658c1-8483-4978-8406-1ff406634029"
}
```

###### 2. Fetch
http://localhost:3000/api/hotel/menu/management/fetch
`POST`
```json
{
    "hotel_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

###### 3. Update Payment
http://localhost:3000/api/hotel/bills/management/update/payment
`PUT`
```json
{
    "bill_id": "2861a0c8-9582-4d84-b227-1de06a3671c3",
    "balance_amount": 0.00,
    "payment_mode": "Cash",
    "payment_status": "Paid"
}
```
----------------------------------------------------------------------------------
