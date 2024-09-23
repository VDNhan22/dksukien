document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn gửi form

    const studentId = document.getElementById('studentId').value;
    const fullName = document.getElementById('fullName').value;
    const className = document.getElementById('class').value;

    // Xử lý thông tin ở đây (ví dụ: lưu vào cơ sở dữ liệu hoặc gửi đến server)
    // Ở đây, chúng ta chỉ cần hiển thị thông báo thành công

    const message = `Đăng ký thành công cho sinh viên ${fullName} (Mã số: ${studentId}, Lớp: ${className})`;
    document.getElementById('message').innerText = message;

    // Reset form
    document.getElementById('registrationForm').reset();
});
