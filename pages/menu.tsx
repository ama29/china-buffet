import { useImageCategories } from '../src/hooks/foodCategories'

const Menu = () => {
    const { menuMeatItems, menuSeafoodItems, menuVegetablesItems, menuGrainItems } = useImageCategories();
  
    return (
    <div>
        <h1 className="font-main justify-center items-center text-center text-4xl mt-5 text-customRed pb-8"> Menu </h1>
        <h2 className="font-main text-3xl text-center mb-8 bg-customRed opacity-75 text-customBronze"> Meat </h2>
        <div className="grid grid-cols-2 mt-4"> 
            {menuMeatItems.map((src, idx) => (
                <div key={src.src} className="grid grid-cols-2 mt-4 mb-4">
                    <div className="pl-6 pr-6">
                        <div className="text-center font-main text-xl">
                            {src.caption}
                        </div>
                        <br></br>
                        <div className="text-center font-body">
                            {src.description}
                        </div>
                    </div>
                    <div>
                        <img src={src.src} alt={`Meat ${idx}`} className="w-2xs rounded-md drop-shadow-xl/50" />
                    </div> 
                </div>
            ))}
        </div>

        <h2 className="font-main text-3xl text-center mb-8 bg-customRed opacity-75 text-customBronze"> Seafood </h2>
        <div className="grid grid-cols-2 mt-4"> 
            {menuSeafoodItems.map((src, idx) => (
                <div key={src.src} className="grid grid-cols-2 mt-4 mb-4">
                    <div className="pl-6 pr-6">
                        <div className="text-center font-main text-xl">
                            {src.caption}
                        </div>
                        <br></br>
                        <div className="text-center font-body">
                            {src.description}
                        </div>
                    </div>
                    <div>
                        <img src={src.src} alt={`Meat ${idx}`} className="w-2xs rounded-md drop-shadow-xl/50" />
                    </div> 
                </div>
            ))}
        </div>

        <h2 className="font-main text-3xl text-center mb-8 bg-customRed opacity-75 text-customBronze"> Vegetables </h2>
        <div className="grid grid-cols-2 mt-4"> 
            {menuVegetablesItems.map((src, idx) => (
                <div key={src.src} className="grid grid-cols-2 mt-4 mb-4">
                    <div className="pl-6 pr-6">
                        <div className="text-center font-main text-xl">
                            {src.caption}
                        </div>
                        <br></br>
                        <div className="text-center font-body">
                            {src.description}
                        </div>
                    </div>
                    <div>
                        <img src={src.src} alt={`Meat ${idx}`} className="w-2xs rounded-md drop-shadow-xl/50" />
                    </div> 
                </div>
            ))}
        </div>

        <h2 className="font-main text-3xl text-center mb-8 bg-customRed opacity-75 text-customBronze"> Grains </h2>
        <div className="grid grid-cols-2 mt-4"> 
            {menuGrainItems.map((src, idx) => (
                <div key={src.src} className="grid grid-cols-2 mt-4 mb-4">
                    <div className="pl-6 pr-6">
                        <div className="text-center font-main text-xl">
                            {src.caption}
                        </div>
                        <br></br>
                        <div className="text-center font-body">
                            {src.description}
                        </div>
                    </div>
                    <div>
                        <img src={src.src} alt={`Meat ${idx}`} className="w-2xs rounded-md drop-shadow-xl/50" />
                    </div> 
                </div>
            ))}
        </div>
    </div>
    );
};

export default Menu;