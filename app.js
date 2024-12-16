// Define variables for player turns
let currentPlayer = "Player 1";
const winCondition = ["Cell A", "Cell B", "Cell C"];
let player1Selections = [];
let player2Selections = [];

// Select all elements with the class "cell" and the turn indicator
const cells = document.querySelectorAll(".cell");
const turnIndicator = document.getElementById("currentTurn");

// Add click event listener to each cell
cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
        const cellText = event.target.textContent;

        // Prevent selecting the same cell multiple times
        if (event.target.classList.contains("p1") || event.target.classList.contains("p2")) {
            alert("Cell already selected!");
            return;
        }

        // Handle turn-based actions
        if (currentPlayer === "Player 1") {
            event.target.classList.add("p1"); // Add Player 1 styling
            player1Selections.push(cellText); // Track Player 1's selections

            // Check Player 1 win condition
            if (winCondition.every((cell) => player1Selections.includes(cell))) {
                alert("Player 1 Wins!");
                return;
            }

            currentPlayer = "Player 2"; // Toggle to Player 2
        } else {
            event.target.classList.add("p2"); // Add Player 2 styling
            player2Selections.push(cellText); // Track Player 2's selections

            // Check Player 2 win condition
            if (winCondition.every((cell) => player2Selections.includes(cell))) {
                alert("Player 2 Wins!");
                return;
            }

            currentPlayer = "Player 1"; // Toggle to Player 1
        }

        // Update the turn indicator
        turnIndicator.textContent = `${currentPlayer}'s Turn`;
    });
});