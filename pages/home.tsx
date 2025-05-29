import "../src/stylesheets/Home.css"

const Home = () => {
  return (
    <div className="min-h-screen grid grid-cols-5 gap-y-0 p-4">
      <div></div>
      <div>
        <img 
          src="/src/assets/images/general/dining_room_cropped.jpg"
          alt="dining_room"
          className="drop-shadow-xl/50 rounded-full object-cover w-3xs"/>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <img 
            src="/src/assets/images/general/front_desk.jpg"
            alt="front_desk"
            className="rounded-full drop-shadow-xl/50 w-3xs"/>
      </div>
      <div></div>
      <div className="text-customRed font-main flex-grow text-3xl flex text-center">
            <p> Experience diverse and authentic Chinese food at an affordable price </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <img 
            src="/src/assets/images/general/buffet.png"
            alt="buffet"
            className="rounded-full max-w-full h-auto drop-shadow-xl/50 w-3xs"/>
      </div>

      <footer className="font-main text-xl justify-center items-center text-center">
        <p>
          800 S Hover St #20, Longmont, CO
          <br/>
          (303) 651-9998
        </p>
      </footer>
    </div>
  );
};

export default Home;