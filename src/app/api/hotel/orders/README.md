# API Requests

----------------------------------------------------------------------------------

### Order Management Module

###### 1. Add
http://localhost:3000/api/hotel/orders/management/add
`POST`
```json
{
    "customer_name": "User Surname",
    "contact": "8080808080",
    "email": "user@eatofy.in",
    "type": "Dine-In",
    "table_id": "aed6fb54-aaf9-4ffb-bba3-304ad6bc950b",
    "waiter_id": "b5c658c1-8483-4978-8406-1ff406634029",
    "hotel_id": "a0240527-ffbd-4563-8b73-84169046da14"
}

// Optional Params
// occassion, date, table_id
```

###### 2. Fetch all orders
http://localhost:3000/api/hotel/orders/management/fetch
`POST`
```json
{
    "hotel_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

###### 3. Fetch all orders (Filter -> Customer Id)
http://localhost:3000/api/hotel/orders/management/fetch/filter/id/customer
`POST`
```json
{
    "customer_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

###### 4. Fetch all orders (Filter -> Table Id)
http://localhost:3000/api/hotel/orders/management/fetch/filter/id/table
`POST`
```json
{
    "table_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

###### 5. Fetch all orders (Filter -> Waiter Id)
http://localhost:3000/api/hotel/orders/management/fetch/filter/id/waiter
`POST`
```json
{
    "waiter_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

###### 6. Fetch all orders (Filter -> Order Type)
http://localhost:3000/api/hotel/orders/management/fetch/filter/type
`POST`
```json
{
    "hotel_id": "605d6692-63d5-4e90-b9eb-436efecfb915",
    "type": "Dine-In"
}
```
----------------------------------------------------------------------------------


### Order Menu Management Module

###### 1. Add
http://localhost:3000/api/hotel/orders/menus/add
`POST`
```json
{
    "quantity": "4",
    "menu_id": "bf5862b7-e46e-455c-b446-a6acca33f11a",
    "order_id": "40bc3ad1-41ac-431a-b9a4-69672a5e1c40"
}
```

###### 2. Add Multiple
http://localhost:3000/api/hotel/orders/menus/add/multiple
`POST`
```json
{
    "data": [
        {
            "quantity": "1",
            "menu_id": "bf5862b7-e46e-455c-b446-a6acca33f11a",
            "order_id": "40bc3ad1-41ac-431a-b9a4-69672a5e1c40",
            "note": "medium teekha"
        },
        {
            "quantity": "2",
            "menu_id": "bf5862b7-e46e-455c-b446-a6acca33f11a",
            "order_id": "40bc3ad1-41ac-431a-b9a4-69672a5e1c40"
        }
    ]
}
```


###### 3. Fetch all order's menus
http://localhost:3000/api/hotel/orders/menus/fetch
`POST`
```json
{
    "order_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

###### 4. Delete Order's menu
http://localhost:3000/api/hotel/orders/menus/delete
`DELETE`
```json
{
    "menu_order_id": "8e12790d-9a61-4a01-b92b-5259c89d519c",
    "reason": "Over Ordering."
}
```

###### 5. Cancelled Orders Fetch
http://localhost:3000/api/hotel/orders/cancelled/fetch
`POST`
```json
{
    "order_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

###### 6. Cancelled Order Fetch Multiple
http://localhost:3000/api/hotel/orders/cancelled/fetch/multiple
`POST`
```json
{
    "hotel_id": "605d6692-63d5-4e90-b9eb-436efecfb915"
}
```

----------------------------------------------------------------------------------

