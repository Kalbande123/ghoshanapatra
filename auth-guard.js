// auth-guard.js - Session Storage Guard
window.addEventListener('DOMContentLoaded', function() {
    
    // युजर खरोखर लॉगइन आहे का ते sessionStorage मधून तपासणे
    const loggedUser = sessionStorage.getItem('username') || sessionStorage.getItem('userFullName') || sessionStorage.getItem('mobile');
    
    // जर युजर लॉगइन नसेल (किंवा त्याने लिंक कॉपी-पेस्ट केली असेल)
    if (!loggedUser) {
        // इथे index.html ऐवजी index.htm केले आहे
        window.location.href = "index.htm"; 
    }
});
