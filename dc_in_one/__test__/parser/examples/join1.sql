select a.area_code,a.prod_id,b.prod_name from sjck.ods_tk_prod_list a
left join intf.tc_product b on a.spec_id = b.prod_offer_id;