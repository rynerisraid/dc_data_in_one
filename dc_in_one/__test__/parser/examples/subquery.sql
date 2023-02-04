select a.area_code,a.prod_id,b.prod_name 
from sjck.ods_tk_prod_list a,
    (select prod_offer_id,prod_offer_name from intf.tc_product) b
where a.spec_id = b.prod_offer_id;