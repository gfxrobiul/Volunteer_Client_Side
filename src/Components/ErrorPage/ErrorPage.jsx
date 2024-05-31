

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 
        'url(https://img.freepik.com/premium-photo/server-room-with-servers-with-locks-broken-indicating-physical-breakin_168058-475.jpg)'}}>

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-[120px] font-bold">404</h1>
      <h1 className="mb-5 text-3xl font-bold">Page Not Found</h1>
      <p className="mb-5"></p>
      
      <a href="/" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
<span className="absolute inset-0 border-2 border-white rounded-full"></span>
</a>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;