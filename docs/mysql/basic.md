# MySql 基础知识

### 设置外网可访问

```bash

use mysql;

update user set host = '%' where user = 'root'; 

select host, user from user; 

flush privileges;

```