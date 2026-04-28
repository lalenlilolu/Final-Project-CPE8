// CrEates floating particles
function createParticles() {
    const container = document.getElementById('particles');
    const numberOfParticles = 40;
    
    for (let i = 0; i < numberOfParticles; i++) {
        // Create particle element
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random ng size and position
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        // inaadd niya to sa container
        container.appendChild(particle);
    }
}

// Handle form submission
function handleLogin(event) {
    event.preventDefault();
    
const button = document.querySelector('.btn-login');
const originalText = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    button.disabled = true;
    
    // Simulate login delay
    setTimeout(function() {
        button.innerHTML = '<i class="fas fa-check"></i> Success!';
        button.style.background = 'linear-gradient(45deg, #4caf50, #8bc34a)';
        
        setTimeout(function() {
            alert('Login successful! Welcome to BudgetWise! 🚀');
            button.innerHTML = originalText;
        button.disabled = false;
            button.style.background = 'linear-gradient(45deg, #ff6b6b, #ffa726)';
        }, 1500);
    }, 2000);
}


document.addEventListener('DOMContentLoaded', function() {
    // Create particles when page loads/design po
    createParticles();
    
    // Add form event listener
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});