document.addEventListener('DOMContentLoaded', () => {
    // Đọc nội dung từ file header.html
    fetch('/header/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải header.html');
            }
            return response.text();
        })
        .then(data => {
            // Chèn nội dung vào thẻ <header>
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Lỗi khi tải header:', error);
        });
});
