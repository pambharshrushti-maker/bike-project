import "./App.css";
const bikes = [
  {
    name: "Royal Enfield Classic 350",
    price: "₹1.93 Lakh",
    mileage: "41.55 km/l",
    weight: "195 kg",
    image: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/special-anniversary-edition/redditch-red/redditch-red-01.png"
  },
  {
    name: "Royal Enfield Hunter 350",
    price: "₹1.50 Lakh",
    mileage: "36 km/l",
    weight: "181 kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUuQtXkJadFbukiFq5wWbHu3huMdOu_w1T3YOx-jKiA&s=10"
  },
  {
    name: "Royal Enfield Bullet 350",
    price: "₹1.74 Lakh",
    mileage: "37 km/l",
    weight: "195 kg",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/127499/bullet-350-next-gen-right-front-three-quarter.png?isig=0&q=80"
  },
  {
    name: "Royal Enfield Meteor 350",
    price: "₹2.05 Lakh",
    mileage: "41.88 km/l",
    weight: "191 kg",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/1/versions/royalenfield-meteor-350-fireball1757944044825.jpg"
  },
  {
    name: "Jawa 42",
    price: "₹1.98 Lakh",
    mileage: "33 km/l",
    weight: "172 kg",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/186271/42-fj-right-front-three-quarter-3.jpeg?isig=0"
  },
  {
    name: "Jawa Bobber 42",
    price: "₹2.12 Lakh",
    mileage: "30 km/l",
    weight: "175 kg",
    image: "https://www.jawayezdimotorcycles.com/cdn/shop/files/chrome-black-dual-tone-aw.png?v=1760085973&width=1200"
  },
  {
    name: "Honda Shine",
    price: "₹83,251 Lakh",
    mileage: "55 km/l",
    weight: "113 kg",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45481/shine-right-side-view-11.jpeg?isig=0"
  },
  {
    name: "Honda SP 125",
    price: "₹91,000 Lakh",
    mileage: "65 km/l",
    weight: "116 kg",
    image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80"
  },
  {
    name: "Yamaha MT-15",
    price: "₹1.70 Lakh",
    mileage: "56.87 km/l",
    weight: "141 kg",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/yamaha-mt-15-standard-20241759582770305.jpg?q=80"
  },
 
];
function App() {
  return (
    <>
      <nav className="navbar">

        <div className="logo">
          BIKEWORLD
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#bikes">Bikes</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      <main>

        <section className="collection" id="bikes">

          <h1>OUR COLLECTION</h1>

          <div className="bike-container">

            {bikes.map((bike, index) => (

              <div className="bike-card" key={index}>

                <div className="bike-name-top">
                  {bike.name}
                </div>

                <img
                  src={bike.image}
                  alt={bike.name}
                  className="bike-image"
                />

                <div className="bike-details">

                  <h3>{bike.price}</h3>

                  <div className="specifications">

                    <div>
                      <span>Mileage</span>
                      <strong>{bike.mileage}</strong>
                    </div>

                    <div>
                      <span>Weight</span>
                      <strong>{bike.weight}</strong>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

      <footer>
        © 2026 Bike World | All Rights Reserved
      </footer>
    </>
  );
}

export default App;