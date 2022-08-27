function toast({ title = '', message = '', type = '', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div')

        // Auto remove Toast
        const autoRemoveID = setTimeout(() =>
            main.removeChild(toast), duration + 1000) //1000 là time cho animation fadeOut

        // remove Toast when click
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveID);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-xmark'
        }

        const icon = icons[type]; //Get class icon tương ứng dựa vào type
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.4s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__mess">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast);
    }
}

const showSuccessToast = () => toast({
    title: 'Success',
    message: 'Bạn đã đăng ký mua hàng thành công!',
    type: 'success',
    duration: 5000
})

const showErrorToast = () => toast({
    title: 'Error',
    message: 'Quá trình đăng ký mua hàng thất bại!',
    type: 'error',
    duration: 4000
})

const showWarningToast = () => toast({
    title: 'Warning',
    message: 'Bạn cần thêm số lượng cho sản phẩm',
    type: 'warning',
    duration: 3000
})

const showInfoToast = () => toast({
    title: 'Infomation',
    message: 'Bạn phải đăng ký trước khi mua hàng',
    type: 'info',
    duration: 2000
})