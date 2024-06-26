document.addEventListener('DOMContentLoaded', function() {
    const balanceAmount = document.getElementById('balanceAmount');
    const withdrawButton = document.getElementById('withdrawButton');
    const taskList = document.getElementById('taskList');
    let balance = 10000;
    
    const tasks = [
        'Tugas 1: Mengisi survei',
        'Tugas 2: Menonton video promosi',
        'Tugas 3: Membaca artikel',
        'Tugas 4: Mengikuti kuis',
        'Tugas 5: Membagikan postingan di media sosial'
    ];
    
    function updateBalance() {
        balanceAmount.textContent = balance;
        if (balance >= 150000) {
            withdrawButton.disabled = false;
        } else {
            withdrawButton.disabled = true;
        }
    }
    
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        const taskButton = document.createElement('button');
        taskButton.textContent = 'Selesaikan Tugas (Rp 10.000)';
        taskButton.addEventListener('click', () => {
            balance += 10000;
            updateBalance();
            taskButton.disabled = true;
            taskButton.textContent = 'Tugas Selesai';
        });
        listItem.appendChild(taskButton);
        taskList.appendChild(listItem);
    });
    
    document.getElementById('registrationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Pendaftaran berhasil! Anda mendapatkan bonus Rp 10.000.');
        balance += 10000;
        updateBalance();
    });
    
    withdrawButton.addEventListener('click', () => {
        if (balance >= 150000) {
            alert('Penarikan berhasil! Saldo Anda sekarang Rp 0.');
            balance = 0;
            updateBalance();
        }
    });
});