export function Hero() {
  return (
    <div className="relative bg-red-900 text-white py-16 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=brazilian%20barbecue%20espetinho%20grill%20smoke%20fire%20night%20dark%20background&image_size=landscape_16_9" 
          alt="Churrasqueira" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
          Espetinho Smart
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 drop-shadow-md">
          O melhor churrasquinho da cidade! Sabor, qualidade e preço justo.
          Peça agora e receba quentinho.
        </p>
      </div>
    </div>
  );
}
