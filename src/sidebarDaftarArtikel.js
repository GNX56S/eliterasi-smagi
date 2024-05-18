document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = document.getElementById('toggleIcon');

    toggleBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('w-64')) {
            sidebar.classList.replace('w-64', 'w-16');
            toggleIcon.classList.replace('fa-xmark', 'fa-bars');
            document.querySelectorAll('#sidebar span').forEach(span => span.classList.add('hidden'));
            document.querySelectorAll('.profil-guru').forEach(li => li.classList.add('hidden'));
            document.querySelectorAll('.side-text').forEach(a => a.classList.replace('justify-start','justify-center'));
        } else {
            sidebar.classList.replace('w-16', 'w-64');
            toggleIcon.classList.replace('fa-bars', 'fa-xmark');
            document.querySelectorAll('#sidebar span').forEach(span => span.classList.remove('hidden'));
            document.querySelectorAll('.profil-guru').forEach(li => li.classList.remove('hidden'));
            document.querySelectorAll('.side-text').forEach(a => a.classList.replace('justify-center','justify-start'));
        }
    });
});

window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}


