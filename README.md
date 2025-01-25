Deklarasi Variabel dan Event Listener

const mainInputEl = document.getElementById("tf-input");
Mendapatkan elemen input teks dengan ID `tf-input` dan menyimpannya ke variabel `mainInputEl`.

const mainButtonEl = document.getElementById("main-button");
Mendapatkan elemen tombol dengan ID `main-button` dan menyimpannya ke variabel `mainButtonEl`.

mainButtonEl.addEventListener("click", addTask);
Menambahkan event listener ke tombol utama `mainButtonEl`. Ketika tombol diklik, fungsi `addTask` akan dijalankan.

Fungsi `addTask`
function addTask() {
Fungsi yang digunakan untuk menambahkan tugas baru ke daftar.

const task = document.createElement("li");
Membuat elemen baru dengan tag `<li>` untuk merepresentasikan tugas.

task.textContent = mainInputEl.value;
Mengisi teks dari elemen `<li>` dengan nilai input dari elemen `mainInputEl`.

task.id = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
Memberikan ID unik pada elemen `<li>` dengan menggunakan kombinasi timestamp (dari `new Date().valueOf()`) dan string acak (`Math.random`).

task.classList.add("list-item");
Menambahkan kelas CSS `list-item` ke elemen `<li>`.

Menambahkan Tombol Edit
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.classList.add("edit-button");
Membuat tombol baru dengan teks "Edit", lalu menambahkan kelas CSS `edit-button`.

editButton.addEventListener("click", () => {
  editTask(task.id);
});
Menambahkan event listener pada tombol edit, yang memanggil fungsi `editTask` dengan ID tugas.

Menambahkan Tombol Delete
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.classList.add("delete-button");
Membuat tombol baru dengan teks "Delete", lalu menambahkan kelas CSS `delete-button`.


deleteButton.addEventListener("click", () => {
  deleteTask(task.id);
});
Menambahkan event listener pada tombol delete, yang memanggil fungsi `deleteTask` dengan ID tugas.

Menambahkan Elemen ke Kontainer
task.appendChild(editButton);
task.appendChild(deleteButton);
document.getElementById("task-container").appendChild(task);
document.getElementById("tf-input").value = "";
Menambahkan tombol edit dan delete ke elemen `<li>`, kemudian menambahkan elemen `<li>` ke dalam elemen dengan ID `task-container`.
Membersihkan nilai input di `tf-input`.

---
Fungsi `deleteTask`
function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}
Fungsi untuk menghapus tugas berdasarkan ID-nya. Mengambil elemen dengan ID yang diberikan dan menghapusnya dari DOM menggunakan `remove()`.

---
Fungsi `editTask`
javascript
function editTask(id) {
  const task = document.getElementById(id);
Mendapatkan elemen tugas dengan ID tertentu.

mainInputEl.value = task.childNodes[0].textContent.trim();
Mengisi input teks dengan teks tugas (bagian pertama dari elemen `<li>`).

mainButtonEl.textContent = "Edit";
Mengubah teks tombol utama menjadi "Edit".

mainButtonEl.removeEventListener("click", addTask);
mainButtonEl.addEventListener("click", editTaskHandler);
Menghapus event listener sebelumnya (`addTask`) dan menggantinya dengan event listener baru (`editTaskHandler`).

Fungsi `editTaskHandler`
function editTaskHandler() {
  task.childNodes[0].textContent = mainInputEl.value;
Mengganti teks dari elemen `<li>` dengan nilai input baru.

mainInputEl.value = "";
mainButtonEl.textContent = "Add Task";
Membersihkan input dan mengubah teks tombol utama kembali ke "Add Task".

mainButtonEl.removeEventListener("click", editTaskHandler);
mainButtonEl.addEventListener("click", addTask);
Menghapus event listener `editTaskHandler` dan menggantinya kembali ke `addTask`.
