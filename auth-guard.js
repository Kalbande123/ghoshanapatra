// auth-guard.js - Session Storage Guard (टॅब बंद केल्यावर किंवा बाहेर पडल्यावर लॉगआउट होणारी सिस्टीम)
window.addEventListener('DOMContentLoaded', function() {
    // sessionStorage वापरल्यामुळे ब्राझर किंवा टॅब बंद केल्यावर डेटा ऑटोमॅटिक डिलीट होतो
    const loggedUser = sessionStorage.getItem('username') || sessionStorage.getItem('userFullName') || sessionStorage.getItem('mobile');
    
    // जर युजर लॉगइन नसेल, तर सरळ लॉगिन पेजवर पाठवा
    if (!loggedUser) {
        alert("कृपया आधी लॉगिन करा! अनधिकृत प्रवेश प्रतिबंधित आहे.");
        window.location.href = "login.html";
    }
});
