

export default function Hero() {
  
  let a = true
  // let b = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-28 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-900" >
            {a ? (
        <section className="flex flex-col min-h-96 p-6 h w-1/4 mx-auto rounded-2xl shadow-lg bg-black text-white">
          <label htmlFor="">Hello</label>
          <input type="text" className="w-full"/>
        </section>
      ) : (
        <div className="h-full w-full flex flex-row">
          <section className="flex min-h-96 w-2/5 mx-auto rounded-lg shadow-lg bg-indigo-50">
           
          </section>
          <section className="flex min-h-96 w-2/5 mx-auto rounded-lg shadow-lg bg-white">
            
          </section>
        </div>
      )}

    </main>
  );
}
