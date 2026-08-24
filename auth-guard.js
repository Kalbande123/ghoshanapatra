// auth-guard.js फाईल
window.addEventListener('DOMContentLoaded', function() {
    const loggedUser = localStorage.getItem('username');
    
    // जर युजर लॉगइन नसेल, तर सरळ लॉगिन पेजवर पाठवा
    if (!loggedUser) {
        alert("कृपया आधी लॉगिन करा!");
        window.location.href = "login.html";
    }
});
