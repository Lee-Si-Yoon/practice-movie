import { useState, useEffect } from "react"; //

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [userMoney, setUserMoney] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setCoinPrice(json[0].quotes.USD.price);
      });
  }, []);

  const onChange = (event) => {
    const regex = /([^0-9.])/g;
    setCoinPrice(event.target.value.replace(regex, ""));
  };
  const handleInput = (event) => {
    setUserMoney(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>How much do you have?</h2>
        <input onChange={handleInput} type="number" value={userMoney}></input>
      </div>
      <div>
        <h1>The Coins! : {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={onChange}>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <h3>You can get : {userMoney / coinPrice} coins</h3>
    </div>
  );
}

export default App;
