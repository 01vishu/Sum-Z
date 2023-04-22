import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Sumz" className="w-28 object-contain" />
        <button
          className="black_btn"
          type="button"
          onClick={() => {
            window.open("https://github.com/01vishu/Sum-Z");
          }}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summize,an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
