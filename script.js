        particlesJS("particles-js", {
            particles: {
                number: { value: 320 },
                size: { value: 4 },
                move: { speed: 5 },
                line_linked: { enable: true, color: "#00ffe5" }
            }
        });

        const roles = ["Frontend Developer", "UI/UX Enthusiast", "Creative Coder", "Tech Innovator", "Loves cats", "Plays Minecraft"];
        let index = 0;
        function changeRole() {
            document.getElementById("animated-text").innerText = roles[index];
            index = (index + 1) % roles.length;
        }
        setInterval(changeRole, 2000);