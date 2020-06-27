UPDATE cart_pctech 
SET qty = qty - 1 
WHERE product_id = $1;