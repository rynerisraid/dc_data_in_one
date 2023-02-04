select a.area_code,a.prod_id,b.prod_name from sjck.ods_tk_prod_list a,intf.tc_product b
where a.spec_id = b.prod_offer_id;