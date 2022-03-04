function loadEvent() {

  let cardsData = [
    {
        title: "Apple",
        sub: "AAPL",
        text: "$ 2.690 T"
    },
    {
        title: "Microsoft",
        sub: "MSFT",
        text: "$ 2.228 T"
    },
    {
        title: "Saudi Aramco",
        sub: "2222.SR",
        text: "$ 2.205 T"
    },
    {
        title: "Alphabet (Google)",
        sub: "GOOG",
        text: "$ 1.778 T"
    },
    {
        title: "Amazon",
        sub: "AMZN",
        text: "$ 1.565 T"
    },
    {
        title: "Tesla",
        sub: "TSLA",
        text: "$ 837.00 B"
    },
    {
        title: "Nvidia",
        sub: "NVDA",
        text: "$ 601.99 B"
    }
  ];
  
  let root = document.getElementById("root");
  
  root.innerHTML = `
    <header class="header">
    <div>ANNUAL REPORTS </div>
    <button class="material-icons menu">menu</button>
    </header>
    
    <div class="container"></div>
  `;
  
  let container = document.querySelector(".container");

  let cards = cardsData
    .map( (item, i) => `
        <div class="card">
            <div class="title-container">
                <p class="sub">${item.sub}</p>
                <p class="title">${item.title}</p>
            </div>
            <div class="price-bttn">
                <div class="text">${item.text}</div>

                <div class="button-container">
                    <div class="visit">Visit</div>
                    <div class="arrow"> <i class="material-icons md-18">arrow_forward</i></div>
                </div>
            </div> 
    `).join("");
  container.insertAdjacentHTML("afterbegin", cards );


}

window.addEventListener("load", loadEvent);