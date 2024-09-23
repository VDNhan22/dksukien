document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn gửi form

    const studentId = document.getElementById('studentId').value;
    const fullName = document.getElementById('fullName').value;
    const className = document.getElementById('class').value;

    // Hiển thị thông điệp thành công
    const message = `Đăng ký thành công cho sinh viên ${fullName} (Mã số: ${studentId}, Lớp: ${className})`;
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    messageDiv.style.display = 'block'; // Hiện tin nhắn

    // Reset form
    document.getElementById('registrationForm').reset();
});
