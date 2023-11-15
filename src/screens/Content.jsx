import {
    Hero,
    Cards,
    Review,
    Footer,
  } from "../screens";
  
  function Content() {
    return (
        <div style={{ marginTop: '120px' }}>
            <Hero />
            <Cards />
            <Review />
            <Footer />
        </div>
    );
  }
  
export default Content;
