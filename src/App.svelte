<script>
  export let name;
  let fullmoon = "fullmoon.png";
  let list = [
    {
      link: "https://publicpark.github.io/clean",
      text: "평화로운 청소마을",
      icon: "assets/comet.png",
    },
    // {
    //   link: "https://publicpark.github.io/face/",
    //   text: "얼굴의 모험",
    //   icon: "fullmoon.png",
    // },
  ];
</script>

<main>
  <div class="moon-wrapper">
    <img src={fullmoon} alt="." class="moon" />
  </div>
  <div class="title">{name}</div>
  <div class="links">
    <!-- each 귀엽네 -->
    {#each list as site}
      <a href={site.link}>
        <img src={site.icon} alt="comet icon" />
        {site.text}
      </a>
    {/each}
  </div>
</main>

<style>
  main {
    text-align: center;
    /* padding: 1em; */
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%);
  }
  .title {
    position: absolute;
    top: 200px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2rem;
    font-family: "Helvetica Neue";
    opacity: 0.5;
  }
  .links {
    /* border: 1px solid red; */
  }
  .links > a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  .links > a:hover {
    transform: scale(1.1);
  }
  .links img {
    width: 20px;
    padding: 0.5em;
  }

  .moon-wrapper {
    position: absolute;
    top: -80%;
    /* border: 1px solid red; */
    height: 100%;
    animation: swing 2s infinite;
    animation-timing-function: ease-in-out;
    -webkit-transform-origin: top;
    -moz-transform-origin: top;
    transform-origin: top;
    display: flex;
    align-items: flex-end;
  }
  .moon {
    width: 100px;
    height: 100px;
  }

  @keyframes swing {
    0% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(20deg);
    }
  }
</style>
