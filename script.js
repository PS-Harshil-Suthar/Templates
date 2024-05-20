// function copyToClipboard(cardNumber) {
//     const contentText = document.querySelector(
//       `.card:nth-child(${cardNumber}) .content-text`
//     );
//     const textContent = contentText.textContent.trim(); // Use textContent to exclude HTML tags and trim whitespace
  
//     navigator.clipboard
//       .writeText(textContent)
//       .then(() => {
//         // Create and style the popup box
//         const popupContainer = document.getElementById("popup-container");
//         popupContainer.innerHTML = `
//           <div class="card2">
//             <div class="card-header">
//               <h2 class="card-title">Content Copied</h2>
//               <button class="close-btn copy-btn" onclick="closePopup()">Close</button>
//             </div>
//             <div class="card-content">
//               <pre><p class="content-text">${textContent}</p><br /></pre>
//             </div>
//           </div>
//         `;
  
//         // Show the popup box
//         popupContainer.style.display = "block";
//       })
//       .catch((err) => {
//         console.error("Failed to copy: ", err);
//       });
//   }
  
//   function closePopup() {
//     const popupContainer = document.getElementById("popup-container");
//     popupContainer.style.display = "none";
//   }

//   function searchCards() {
//     // Get the search query from the input field
//     const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  
//     // Get all card titles
//     const cardTitles = document.querySelectorAll(".card-title");
  
//     // Loop through each card title and check if it matches the search query
//     cardTitles.forEach((title) => {
//       const card = title.closest(".card");
//       const cardTitle = title.textContent.toLowerCase();
//       if (cardTitle.includes(searchQuery)) {
//         card.style.display = "block"; // Show the card if it matches the search query
//       } else {
//         card.style.display = "none"; // Hide the card if it doesn't match the search query
//       }
//     });
//   }
  
  



// document.addEventListener('DOMContentLoaded', () => {
//     showCard(1); // Show the first card by default
// });

// function showCard(cardId) {
//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => card.style.display = 'none'); // Hide all cards
//     document.getElementById(`card-${cardId}`).style.display = 'block'; // Show the selected card
// }

// function copyToClipboard(cardId) {
//     const cardContent = document.querySelector(`#card-${cardId} .card-content`).innerText;
//     navigator.clipboard.writeText(cardContent).then(() => {
//         alert('Content copied to clipboard!');
//     }, (err) => {
//         console.error('Could not copy text: ', err);
//     });
// }

// function searchCards() {
//     const input = document.getElementById('searchInput').value.toLowerCase();
//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//         const title = card.querySelector('.card-title').innerText.toLowerCase();
//         if (title.includes(input)) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }





document.addEventListener('DOMContentLoaded', () => {
  showCard(1); // Show the first card by default
});

function showCard(cardId) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.style.display = 'none'); // Hide all cards
  document.getElementById(`card-${cardId}`).style.display = 'block'; // Show the selected card
}

function copyToClipboard(cardId) {
  const cardContent = document.querySelector(`#card-${cardId} .card-content`).innerText;
  navigator.clipboard.writeText(cardContent).then(() => {
      // Create and style the popup box
      const popupContainer = document.getElementById("popup-container");
      popupContainer.innerHTML = `
        <div class="card2">
          <div class="card-header">
            <h2 class="card-title">Content Copied</h2>
            <button class="close-btn copy-btn" onclick="closePopup()">Close</button>
          </div>
          <div class="card-content">
            <pre><p class="content-text" style="font-size: 1.3em">${cardContent}</p><br /></pre>
          </div>
        </div>
      `;
      // Show the popup box
      popupContainer.style.display = "block";
  }, (err) => {
      console.error('Could not copy text: ', err);
  });
}

function closePopup() {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.style.display = "none";
}

function searchCards() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const title = card.querySelector('.card-title').innerText.toLowerCase();
      if (title.includes(input)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}
