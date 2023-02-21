insert into sjck.temp1(id,prod_id,spec_id,prod_name)
select a.id,a.prod_id,a.spec_id,b.prod_name
from sjck.temp_prod a inner join sjck.prod_name b on a.spec_id = b.spec_id;