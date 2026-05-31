
            const board = document.getElementById('path-board');
            for(let i=0; i<25; i++) {
                const cell = document.createElement('div');
                cell.className = 'path-cell';
                if(i===0) cell.style.background = 'green'; // Start
                if(i===24) cell.style.background = 'red'; // End
                if([6,7,8].includes(i)) cell.style.background = 'gray'; // Barriers
                board.appendChild(cell);
            }
        