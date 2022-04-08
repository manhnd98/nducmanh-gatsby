---
title: Awesome Blog Post Title
author: Nikola
date: 2020-07-15
imageUrl: /post-static/macbook.jpg
nextUrl: hello
nextTitle: hello
prevUrl: hello
prevTitle: hello
tags: react,angular,typescript
---

# Data Spark
## Các command hay dùng trong dự án
### 1. Chuyển user (su)

```bash
sudo su - netapp
```

Chuyển user hiện tại sang user `netapp`.

Vì tính chất dự án cần sử dụng trên 2 user khác nhau:

- briannguyen-ext
- netapp

User `netapp` có quyền truy cập và chạy các lệnh liên quan đến CapexDataQuality mà user `briannguyen-ext` không có quyền. Nên trong quá trình thực hiện các lệnh đôi khi cần chuyển user.

*Note: User `netapp` không có quyền truy cập các folder của user briannguyen-ext nên có thể chuyển từ user `netapp` sang user `briannguyen-ext` bằng cách dùng lệnh*

```bash
sudo su - briannguyen-ext
```

*Tương tự như command ban đầu nhưng thay username `netapp` bằng `briannguyen-ext`.*

*Có thể đổi sang các user khác bằng cách tương tự*

### 2. Change Directory (cd)

Dùng lệnh cd để có thể truy cập vào các folder khác.

```bash
// Caây thư muc

data1
-----netapp
-----------nightly-run
----------------------CapexDataQuality
--------------------------------------bin
--------------------------------------testData
-----------daily-run
-----------monthly-run
```

Có thể thấy trong ví dụ trên

- folder netapp nằm trong như mục data1
- folder nightly-run, daily-run, monthly-run nằm trong folder netapp
- folder CapexDataQuality nằm trong folder nightly-run
- folder bin, testData nằm trong thư mục CapexDataQuality

***Note: Cây thư mục có thể không đúng với thực tế, chỉ là ví dụ minh họa.***

Thông thường, để truy cập vào thư mục bin để có thể chạy script `[runner.sh](http://runner.sh)` chúng ta có thể dùng trực tiếp lệnh

```bash
cd /data1/netapp/nightly_run/CapexDataQuality/bin #Truy cap vao thu muc bin
./runner.sh #chay file runner.sh
```

hoặc để vào testData có thể dùng lệnh

```bash
cd /data1/netapp/nightly_run/CapexDataQuality/testData
```

Tuy nhiên, trong 1 số trường hợp có thể sử dụng lệnh ngắn hơn để truy cập nhanh hơn. Ví dụ, hiện tại đang ở thư mục testData (`/data1/netapp/nightly_run/CapexDataQuality/testData`) và muốn chuyển qua thư mục `bin`.

```bash
# hien tai dang o trong thu muc testData
cd .. #sau khi thuc hien lenh, chung ta se di chuyen ra thanh folder **CapexDataQuality**
cd ./bin #chuyen vao thu muc bin
```

### 3. Move file (mv).

`mv` tương tự với `cut` ở trên windows.

```bash
# Cay thu muc
lib
---java1.jar
---java2.jar
---demo1.jar
---hello.jar
---backup # backup la 1 folder
```

***Note: Cây thư mục có thể không đúng với thực tế, chỉ là ví dụ minh họa.***

Như trong ví dụ minh họa bên trên, trong thư mục `lib` gồm có 4 file:

- java1.jar
- java2.jar
- demo1.jar
- hello.jar

và 1 folder `backup`.

Để chuyển 4 files jar vào thư mục backup trước khi thực hiện upload các file jar mới lên chúng ta có thể dùng.

```bash
# mv file/thumucgoc thumucmoi
mv ./java1.jar ./backup #chuyen file java1.jar vao folder backup
mv ./java2.jar ./backup #chuyen file java2.jar vao folder backup
mv ./demo1.jar ./backup #chuyen file demo1.jar vao folder backup
mv ./hello.jar ./backup #chuyen file hello.jar vao folder backup
```

hoặc có thể dùng dấu * để xử lý các file có file name bắt đầu giống nhau

```bash
mv ./java* ./backup #chuyen file java1.jar va java2.jar vao folder backup
```

vì 2 file java1 và java2 đều bắt đầu bằng java nên chúng ta có thể dùng `java*` để thay thế cho tất cả các file bắt đầu bằng java.

### 4. Copy file (cp).

Tương tự với `3. Move file` thay `rm` bằng `cp`.

```bash
cp ./java1.jar ./backup
```

### 5. Tạo folder (mkdir)

Tạo 1 folder trống trong thư mục hiện tại.

```bash
mkdir folder_name
mkdir demo #tao folder moi voi ten la demo
```

### 6. Tạo file trống (touch)

Tạo file trống trong thư mục hiện tại

```bash
touch file_name
touch java1.jar #tao file moi voi ten la hello
```

### 7. Delete files (rm).

`rm` tương tự với `shift + delete` trên windows, có nghĩa là xóa đi rồi sẽ không thể restore được.

```bash
# Cay thu muc
lib
---java1.jar
---java2.jar
---demo1.jar
---hello.jar
---backup # backup la 1 folder
---------java1.jar
```

Quay lại với cây thư mục ở ví dụ `3. Move file` lần này, trong thư mục backup đã có thêm file `java.jar`.

Để xóa file chúng ta có thể thực hiên lệnh

```bash
rm ./java1.jar
rm ./java2.jar
...
```

Tương tự như move file, tuy nhiên không có thư mục mới.

```bash
rm ./java* #xoa tat ca file bat dau bang java
```

Tuy nhiên, lệnh `rm` như trên chỉ có thể xóa được file. Để thực hiện xóa được folder, chúng ta cần phải thêm option `-r` cho lệnh đó.

```bash
rm -r ./backup # r la recursive, xoa ca cac file trong folder
```


![https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)