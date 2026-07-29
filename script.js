// Fungsi untuk mengganti tampilan jadwal berdasarkan tab hari yang ditekan
function showSchedule(dayId) {
    const contents = document.querySelectorAll('.schedule-content');
    const buttons = document.querySelectorAll('.tab-btn');

    contents.forEach(content => {
        content.classList.remove('active');
    });
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(dayId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Otomatis memilih tab sesuai hari saat ini saat halaman dibuka pertama kali
document.addEventListener('DOMContentLoaded', () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayIndex = new Date().getDay(); // 0: Minggu, 1: Senin, dst.
    const todayName = days[todayIndex];

    // Jika hari aktif adalah Senin-Jumat, buka tab tersebut. Jika akhir pekan (Sabtu/Minggu), default ke Senin.
    if (['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(todayName)) {
        const btn = document.querySelector(`.tab-btn[onclick*="${todayName}"]`);
        if (btn) {
            btn.click();
        }
    }
});