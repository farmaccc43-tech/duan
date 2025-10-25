// Khi DOM đã sẵn sàng, thực hiện chèn footer
document.addEventListener('DOMContentLoaded', () => {
    // Đọc nội dung từ footer.html
    fetch('/footer/footer.html') // Đường dẫn tới file footer.html
        .then(response => {
            if (!response.ok) {
                throw new Error('Không thể tải footer.html');
            }
            return response.text();
        })
        .then(data => {
            // Chèn nội dung vào thẻ <footer> trong HTML
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Lỗi khi tải footer:', error);
        });
});
