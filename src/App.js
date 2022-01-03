/*ヘッダー*/
function Header() {
    return (
      <header className="hero is-success is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Do you want a Meme?!</h1>
            <p>日本大学文理学部情報科学科 Webプログラミングの演習課題03</p>
          </div>
        </div>
      </header>
    );
  }
  

  function Background(){
      return (
        <section class="hero is-fullheight" style="background-image: url('http://buzzap.net/images/2011/12/07/Nyan_Cat/nyancat1.jpg')">
        </section>
      );
  }

  function Image() {
    const url = "";
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
          <img src={url} alt="meme" />
          </figure>
        </div>
      </div>
    );
  }
  
  function Gallery() {
    return (
      <div className="columns is-vcentered is-multiline">
        <div className="column is-3">
          <Image />
        </div>
      </div>
    );
  }
  
  function Main() {
    return (
      <main>
        <section className="section">
            <div className="container has-text-centered">
                

                <font size="7"><p>Do you know "Memes"?!</p></font><br></br>

                <p>Internet meme is an action,concept,<br></br>
                 and medium that spreads from person to person,<br></br>
                 usually as an imitation, through the Internet.<br></br>
                <a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%83%BB%E3%83%9F%E3%83%BC%E3%83%A0" target="_blank">Wiki</a></p>

                 <br></br>
                 <br></br>

                 <font size="6"><p>Simply, it's a "Bit of a cool image".</p></font><br></br>

                <font size="6"><p>....</p></font><br></br>

                <p>By the way, don't you want today's special meme images?</p><br></br>

                <a href="#" class="button is-primary is-large">Click Here!</a>

                <Gallery />
                
            </div>
        </section>
      </main>
    );
  }
  

  /*フッター*/
  function Footer() {
    return (
      <footer className="hero is-success is-bold">
        <div className="hero-body">
           <div className="content has-text-centered">
                <p>Meme images are retrieved from Meme Maker API</p>
                <p>
                <a href="https://mememaker.github.io/API/">Donate to Meme Maker API</a>
                </p>
                <p>Author Name :Kaori Takakura</p>
                <p>ST Number : 5420077</p>
           </div>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;