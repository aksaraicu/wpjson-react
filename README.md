# wpjson-react
 WordPress REST API V2 integration with ReactJS

WPJson-React merupakan repositori contoh daripada integrasi REST API V2 dari WordPress Custom Post Type yang akan di fetch datanya ke projek React. Dengan kesimpulan, Anda dapat menggunakan React sebagai frontend dan WordPress untuk backendnya!

<h1>Archive Aset (File utama)</h1>
Pada Archive Aset kita akan melihat ada sebuah table yang berisikan API dari sebuah situs WordPress:

<h2>Import fungsi</h2>
1.	React: Untuk kebutuhan projek React
2.	Axios: Untuk kebutuhan penarikan data API dari sumber JSON format
3.	ExternalLink: Untuk kebutuhan pengambilan/penujuan link pada React
4.	CurrencyFormat: Untuk kebutuhan memformat data “harga” pada React

<h2>Fungsi ArchiveAset</h2>
1.	ArchiveAset merupakan komponen dan fungsi utama yang dijalankan daripada file ArchiveAset.js
2.	Dimana variable kita declare, yakni asets dan setAsets sebagai dispatcher dan state
3.	Didalamnya kita dapat melihat ada 2 fungsi:
<br><br>
<ul><strong>getAsets (asynchronous function)</strong></ul>
<li>i.	Pada getAsets kita menggunakan try and catch block dimana pada try kita akan mencoba untuk mengambil data dari sumber JSON WordPress yang disimpan dalam variable “response”</li>
<li>ii.	Data dari variable tersebut dapat dipanggil dengan “response.data” yang akan dimasukkan kedalam state setAsets, sehingga statenya akan merujuk kepada data dari URL JSON WordPress yang telah kita ambil dengan Axios</li>
<br><br>
<ul><strong>useEffect (function)</strong></ul>
<li>i.	Digunakan untuk mengambil dan menjalankan getAsets</li>
<li>ii.	Mengapa harus useEffect? Demi kenyamanan serta kesederhanaan kode. Dimana terdapat empty array pada akhir yang dapat digunakan untuk pengulangan kode jika nantinya ada perubahan property pada variable yang kita gunakan (jika dibutuhkan saja, jika tidak, array dikosongkan)</li>
<br><br>
<h2>Mapping</h2>
1.	Asets (dispatcher) akan ditugaskan untuk mapping data response yang tadi telah dideclare dari statenya, yakni setAsets dan akan ditambahkan metode .map untuk kebutuhan mapping
<br><br>
<ul><strong>Metode .map menggunakan 2 parameter (value, index):</strong></ul>
<li>a.	Value (asset) digunakan untuk mapping JSON WordPress (harus sesuai dengan JSON)</li>
<li>b.	Index (index) digunakan sebagai key daripada child semua data maps</li>
<br><br>
2.	Pada Fasilitas, map digunakan untuk merapihkan array (fasilitas berbentuk array) dan dibungkus dengan class badge dari daisyUI serta id sebagai keynya

<h2>External Link dan Currency Format</h2>
1.	Tag CurrencyFormat digunakan untuk memformat value dari {aset.harga} yang telah disediakan JSON WordPress dimana kita akan mendisplaynya sebagai text, menggunakan separator value dengan titik, menggunakan separator decimal dengan koma, menggunakan “Rp” sebagai kata awal/prefix serta merender value {aset.harga} pada div (sehingga bisa dikustom)
<br><br>
<ul><strong>Tag ExternalLink digunakan untuk gambar dan kontak dimana:</strong></ul>
<li>a.	Link gambar akan menuju link originalnya masing-masing</li>
<li>b.	Dan mengeluarkan gambar dari link originalnya masing-masing</li>
<li>c.	Serta mentargetkan kontak menuju ke link original daripada JSON WordPress</li>
<br><br>
<h2>Fungsinya di export</h2>
1.	Agar dapat di import ke App.js
