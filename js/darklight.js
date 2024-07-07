document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Lắng nghe sự kiện click trên nút chuyển đổi
    themeToggle.addEventListener('click', function() {
        // Kiểm tra xem trạng thái hiện tại của giao diện là sáng hay tối
        if (body.classList.contains('light-mode')) {
            // Nếu đang ở chế độ sáng, chuyển sang chế độ tối
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            // Nếu đang ở chế độ tối, chuyển sang chế độ sáng
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });
});
