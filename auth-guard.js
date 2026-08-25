// auth-guard.js - Session Storage Guard (Unregistered users redirected to index.html)
window.addEventListener('DOMContentLoaded', function() {
    
    // युजर खरोखर लॉगइन आहे का ते sessionStorage मधून तपासणे
    const loggedUser = sessionStorage.getItem('username') || sessionStorage.getItem('userFullName') || sessionStorage.getItem('mobile');
    
    // जर युजर लॉगइन नसेल (किंवा त्याने लिंक कॉपी-पेस्ट केली असेल)
    if (!loggedUser) {
        // त्याला थेट तुमच्या मुख्य लँडिंग पेजवर (index.html) पाठवून द्या
        window.location.href = "index.html";
    }
});
