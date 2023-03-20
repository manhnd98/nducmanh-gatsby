---
title: 'Database 101: Database lưu trong disk thế nào?'
author: Nguyen Duc Manh
date: 2020-07-15
imageUrl: /post-static/database-1.jpg
nextUrl: ''
nextTitle: ''
prevUrl: ''
prevTitle: ''
tags: ''
description: ''
---

> "The more that you know, the more you realize that there is always more to know."
>

Để thực hiện quá trình đọc, ghi dữ liệu vào disk, database sẽ chia các file thành các blocks (còn được gọi là pages). Size của mỗi page là cố định 8 Kb đối với Postgres và 16 Kb đối với MySQL và bạn có thể thay đổi thông số này thông qua setting của database server.

Bất kể data thuộc block nào cũng sẽ được database server xử lý như nhau. Các blocks sẽ được đọc vào một cái shared buffer và sau đó sẽ được đọc hoặc chỉnh sửa thông qua các xử lý của database server và sau đó sẽ được lưu ngược lại vào disk nếu cần (quá trình này có thể gọi là swapped).

![Untitled](/post-static/database-1-1.png)