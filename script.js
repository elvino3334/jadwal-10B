// Data Jadwal Mata Pelajaran
const jadwalData = {
    Senin: [
        { jam: "1️⃣", waktu: "07.30 - 09.00", mapel: "Bahasa Jerman", guru: "Mrs. Okto" },
        { jam: "2️⃣", waktu: "09.30 - 10.30", mapel: "Matematika", guru: "Ms. Tia" },
        { jam: "3️⃣", waktu: "11.00 - 12.30", mapel: "Sosiologi", guru: "Ms. There" },
        { jam: "4️⃣", waktu: "13.00 - 14.30", mapel: "Informatika", guru: "Ms. Val" }
    ],
    Selasa: [
        { jam: "1️⃣", waktu: "07.30 - 09.00", mapel: "Kimia", guru: "Mrs. Omry" },
        { jam: "2️⃣", waktu: "09.00 - 10.30", mapel: "Seni Budaya / Prakarya", guru: "Mrs. Ridwan" },
        { jam: "3️⃣", waktu: "11.00 - 12.30", mapel: "Biologi", guru: "Ms. Anna" },
        { jam: "4️⃣", waktu: "13.00 - 14.30", mapel: "Pendidikan Pancasila", guru: "Ms. Val" }
    ],
    Rabu: [
        { jam: "1️⃣", waktu: "07.30 - 09.00", mapel: "PE / PJOK", guru: "Mrs. Cris" },
        { jam: "2️⃣", waktu: "09.00 - 10.30", mapel: "English", guru: "Ms. Monic" },
        { jam: "3️⃣", waktu: "11.00 - 12.30", mapel: "Matematika", guru: "Ms. Tia" },
        { jam: "4️⃣", waktu: "13.00 - 14.30", mapel: "ESL / SNMPTN", guru: "TBA" }
    ],
    Kamis: [
        { jam: "1️⃣", waktu: "07.30 - 09.00", mapel: "Ekonomi", guru: "Ms. Yena" },
        { jam: "2️⃣", waktu: "09.00 - 10.30", mapel: "Sejarah", guru: "Mr. Tri" },
        { jam: "3️⃣", waktu: "11.00 - 12.30", mapel: "Fisika", guru: "Ms. Ratih" },
        { jam: "4️⃣", waktu: "13.00 - 14.30", mapel: "Bahasa Indonesia", guru: "Mr. Frenky" }
    ],
    Jumat: [
        { jam: "1️⃣", waktu: "09.00 - 09.45", mapel: "Homeroom", guru: "Ms. Yena" },
        { jam: "2️⃣", waktu: "09.45 - 10.30", mapel: "Bahasa Indonesia", guru: "Mr. Frenky" },
        { jam: "3️⃣", waktu: "11.00 - 12.30", mapel: "Geografi", guru: "Ms. Anna" },
        { jam: "4️⃣", waktu: "13.00 - 14.30", mapel: "Agama Kristen", guru: "Ms. Putu" }
    ]
};

const tabsContainer = document.getElementById('tabs-container');
const scheduleContainer = document.getElementById('schedule-container');

const hariList = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

// Fungsi untuk membuat tombol Tab hari
function renderTabs() {
    hariList.forEach((hari, index) => {
        const button = document.createElement('button');
        button.classList.add('tab-btn');
        if (index === 0) button.classList.add('active'); // Jadikan Senin aktif pertama kali
        button.innerText = hari;
        
        button.addEventListener('click', () => {
            // Hapus kelas aktif dari semua tab
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            // Tambahkan aktif di tab yang diklik
            button.classList.add('active');
            // Render ulang jadwal
            renderSchedule(hari);
        });
        
        tabsContainer.appendChild(button);
    });
}

// Fungsi untuk menampilkan jadwal berdasarkan hari
function renderSchedule(hari) {
    scheduleContainer.innerHTML = ''; // Kosongkan jadwal lama
    const jadwalHariIni = jadwalData[hari];

    if (!jadwalHariIni || jadwalHariIni.length === 0) {
        scheduleContainer.innerHTML = `<p class="no-schedule">Tidak ada jadwal untuk hari ${hari}.</p>`;
        return;
    }

    jadwalHariIni.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('subject-card');

        card.innerHTML = `
            <div class="jam-ke">${item.jam.replace('️⃣', '')}</div>
            <div class="details">
                <h3>${item.mapel}</h3>
                <div class="time">🕒 ${item.waktu}</div>
                <div class="teacher">👤 ${item.guru}</div>
            </div>
        `;
        scheduleContainer.appendChild(card);
    });
}

// Inisialisasi awal saat web dibuka
renderTabs();
renderSchedule('Senin'); // Munculkan Senin secara default