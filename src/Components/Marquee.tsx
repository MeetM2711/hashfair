import SlideBox from './SlideBox';

const MainMarquee = () => {
  return (
    <div className="main-marq overflow-hidden py-10 relative">
      <div className="slide-har st1 flex">
        <SlideBox />
        <SlideBox />
      </div>
    </div>
  );
};

export default MainMarquee;
